import { getConfig, formatJSON, qs, storage, tempData } from 'docfree-utils';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { getOptions } from 'loader-utils';
import parser from './parser';

const getDepth = (settingDepth: any, defaultDepth: number) => {
  const depth = Number(isNaN(settingDepth) ? defaultDepth : settingDepth) || 0;

  if (depth < 0) {
    return 0;
  }
  if (depth > 6) {
    return 6;
  }
  return depth;
};

module.exports = async function docfreeLoader(this: any, content: string) {
  const { resourcePath, resourceQuery } = this;
  const { styleContentKey } = qs.parse(resourceQuery.slice(1));

  if (styleContentKey) {
    const styleContent = storage.get(styleContentKey);

    return styleContent;
  }

  const callback = this.async();
  const config: any = getConfig();
  const { sidebar } = config;
  const { content: markdownContent, data: setting } = matter(content);
  const resource = { resourcePath, content: markdownContent };
  const { content: mdContent, headings: hs } = parser(resource, config.plugins);
  const sidebarTitle = setting.title || '';
  const sidebarDepth = getDepth(setting.depth, sidebar.depth);
  const pageSidebarDepth = getDepth(setting.pageDepth, sidebar.pageDepth);

  let result = '';
  let title = '';

  const headings = hs.filter((item) => {
    const { depth, text } = item;

    if (depth === 1) {
      if (!title) {
        title = text;
      }

      return false;
    }

    return true;
  });

  const sidebarMenus = sidebarDepth ? headings.filter(({ depth }) => depth <= sidebarDepth) : [];

  const pageSidebarMenus = pageSidebarDepth
    ? headings
        .filter(({ depth }) => {
          return depth <= pageSidebarDepth && depth > sidebarDepth;
        })
        .map((item) => {
          const { level, depth, ...rest } = item;

          if (sidebarDepth) {
            return { level: depth - sidebarDepth, ...rest };
          }

          return item;
        })
    : [];

  content = `import React from 'react';
import * as Docfree from 'docfree-components';

${mdContent}\nexport default Docfree.Content;`;

  try {
    result = await mdx(content);
  } catch (err) {
    return callback(err);
  }

  result = result
    .replace(/(export) default/, '$1')
    .replace('/* @jsx mdx */', '')
    .replace(/\s+mdxType="[^"]+"/g, '')
    .replace(/(<[a-z][a-zA-Z]*)\sparentName="[^"]+"/g, '$1')
    .replace(
      /<(inlineCode)>([\s\S]*?)<\/\1>/g,
      (a, b, c) => `<code className="inline">${c}</code>`,
    );

  return callback(
    null,
    `${result}

    const nuomiProps = {
      state: {
        showCode: false,
      },
      sidebarTitle: '${sidebarTitle}',
      headings: ${formatJSON(headings)},
      showSidebar: ${sidebarDepth > 0 && sidebarMenus.length > 0},
      showPageSidebar: ${pageSidebarDepth > 0 && pageSidebarMenus.length > 0},
      sidebarMenus: ${formatJSON(sidebarMenus)},
      pageSidebarMenus: ${formatJSON(pageSidebarMenus)},
      utime: ${tempData.get(resourcePath).utime},
      render() {
        return <MDXContent pageExtra={${formatJSON(
          setting.pageExtra !== false ? config.pageExtra : false,
        )}} />
      },
    };
    ${title ? `nuomiProps.title = '${title}';` : ''}
    export default nuomiProps;
  `,
  );
};

module.exports.pitch = function docfreeLoaderPitch(this: any, request: string) {
  const options = getOptions(this);
  const params = qs.parse(this.resourceQuery.slice(1));

  if (options.style !== true && params.styleContentKey) {
    let requests = request.split('!');

    requests = requests
      .slice(0, -1)
      .concat(`${require.resolve('docfree-loader')}?style=true`, requests.slice(-1));

    requests = Array.from(new Set(requests));

    return `module.exports = require('!!${requests.join('!')}');`;
  }
};
