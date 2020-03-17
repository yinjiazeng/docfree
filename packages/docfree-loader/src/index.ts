import { getConfig } from 'docfree-utils';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import parseMarkdown from './parseMarkdown';

module.exports = async function docfreeLoader(content: string) {
  const callback = this.async();
  const config = getConfig();
  const { sidebar } = config;
  const { content: markdownContent, data: setting } = matter(content);
  const { content: mdContent, data: heading } = parseMarkdown(markdownContent);
  const showSidebar: boolean =
    typeof setting.sidebar === 'boolean' ? setting.sidebar : sidebar.show;
  const sidebarDepth: number =
    setting.pageSidebar >= 1 && setting.pageSidebar <= 6 ? setting.depth : sidebar.depth;
  let result: string;
  const subSidebarMenus = heading.filter(({ depth }) => depth > 1 && depth <= sidebarDepth);

  content = `${mdContent}\nexport default Layout`;

  try {
    result = await mdx(content);
  } catch (err) {
    return callback(err);
  }

  result = result.replace('export default ', '');

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
        subSidebarMenus: ${JSON.stringify(subSidebarMenus)},
      },
      render: () => <MDXContent />;
    };

    ${!!heading.length && `nuomiProps.title = '${heading[0].title}';`}

    module.exports = nuomiProps;
  `,
  );
};
