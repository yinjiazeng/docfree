import { getConfig, formatJSON } from 'docfree-utils';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { getOptions } from 'loader-utils';
import parseMarkdown from './parseMarkdown';

module.exports = async function docfreeLoader(this: any, content: string) {
  const options = getOptions(this);
  const callback = this.async();
  const config = getConfig();
  const { sidebar } = config;
  const { content: markdownContent, data: setting } = matter(content);
  const { content: mdContent, data: heading } = parseMarkdown(markdownContent, options);
  const showSidebar: boolean =
    typeof setting.sidebar === 'boolean' ? setting.sidebar : sidebar.show;
  const sidebarDepth: number =
    setting.pageSidebar >= 1 && setting.pageSidebar <= 6 ? setting.depth : sidebar.depth;
  let result = '';
  let title = '';
  const subSidebarMenus = heading.filter(({ depth, title: tit }) => {
    if (!title && depth === 1) {
      title = tit;
      return false;
    }
    return depth > 1 && depth <= sidebarDepth;
  });

  content = `${mdContent}\nexport default Layout`;

  try {
    result = await mdx(content);
  } catch (err) {
    return callback(err);
  }

  result = result.replace('export default ', '').replace('/* @jsx mdx */', '');

  return callback(
    null,
    `
    import React from 'react';
    import { Layout, HashLink } from 'docfree-components';

    ${result}

    const nuomiProps = {
      state: {
        showSidebar: ${showSidebar},
        sidebarMenus: [],
        subSidebarMenus: ${formatJSON(subSidebarMenus)},
      },
      render: () => <MDXContent />
    };

    ${!!title && `nuomiProps.title = '${title}';`}

    module.exports = nuomiProps;
  `,
  );
};
