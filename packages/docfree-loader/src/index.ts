import { getConfig, formatJSON } from 'docfree-utils';
import { dirname } from 'path';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { getOptions } from 'loader-utils';
import parseMarkdown from './parseMarkdown';

module.exports = async function docfreeLoader(this: any, content: string) {
  const { resourcePath } = this;
  const options = getOptions(this);
  const callback = this.async();
  const config = getConfig();
  const { sidebar, pageSidebar } = config;
  const { content: markdownContent, data: setting } = matter(content);
  const resource = {
    filePath: resourcePath,
    dirPath: dirname(resourcePath),
    content: markdownContent,
  };
  const { content: mdContent, data: heading } = parseMarkdown(resource, options);

  const sidebarTitle = setting.sidebarTitle || '';
  const showSidebar: boolean =
    typeof setting.sidebar === 'boolean' ? setting.sidebar : sidebar.show;
  const sidebarDepth: number =
    setting.sidebarDepth >= 1 && setting.sidebarDepth <= 6 ? setting.sidebarDepth : sidebar.depth;
  const showPageSidebar: boolean =
    typeof setting.pageSidebar === 'boolean' ? setting.pageSidebar : pageSidebar.show;
  const pageSidebarDepth: number =
    setting.pageSidebarDepth >= 1 && setting.pageSidebarDepth <= 6
      ? setting.pageSidebarDepth
      : pageSidebar.depth;

  let result = '';
  let title = '';

  const headings = heading.filter((item) => {
    const { depth, text } = item;
    if (depth === 1) {
      if (!title) {
        title = text;
      }
      return false;
    }
    return true;
  });

  const sidebarMenus = headings.filter(({ depth }) => depth <= sidebarDepth);

  const pageSidebarMenus = headings
    .filter(({ depth }) => {
      const bool = depth <= pageSidebarDepth;
      if (!showSidebar) {
        return bool;
      }
      return bool && depth > sidebarDepth;
    })
    .map((item) => {
      const { level, depth, ...rest } = item;
      if (showSidebar) {
        return { level: level - (depth - sidebarDepth + 1), ...rest };
      }
      return item;
    });

  content = `import React from 'react';
  import { Layout, HashLink, Playground } from 'docfree-components';
  ${mdContent}\nexport default Layout;`;

  try {
    result = await mdx(content);
  } catch (err) {
    return callback(err);
  }

  result = result
    .replace(/(export) default/, '$1')
    .replace('/* @jsx mdx */', '')
    .replace(/\s+mdxType="[^"]+"/g, '');

  return callback(
    null,
    `${result}

    const nuomiProps = {
      state: {
        showCode: false,
      },
      sidebarTitle: '${sidebarTitle}',
      showSidebar: ${showSidebar},
      showPageSidebar: ${showPageSidebar},
      sidebarMenus: ${formatJSON(sidebarMenus)},
      pageSidebarMenus: ${formatJSON(pageSidebarMenus)},
      render: () => <MDXContent />
    };
    ${title ? `nuomiProps.title = '${title}';` : ''}
    export default nuomiProps;
  `,
  );
};
