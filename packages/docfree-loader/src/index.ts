import { getConfig, formatJSON, formatDate, qs } from 'docfree-utils';
import { statSync } from 'fs';
import mdx from '@mdx-js/mdx';
import matter from 'gray-matter';
import { getOptions } from 'loader-utils';
import parser from './parser';

const getDepth = (settingDepth: number, defaultDepth: number) => {
  const depth = Number(isNaN(settingDepth) ? defaultDepth : settingDepth) || 3;
  if (depth < 1) {
    return 1;
  }
  if (depth > 6) {
    return 6;
  }
  return depth;
};

const getBool = (settingBool: boolean, defaultBool: boolean) => {
  return Boolean(typeof settingBool === 'boolean' ? settingBool : defaultBool);
};

module.exports = async function docfreeLoader(this: any, content: string) {
  const { resourcePath, resourceQuery } = this;
  const params = qs.parse(resourceQuery.slice(1));

  if (params.styleContent != null) {
    return Buffer.from(params.styleContent, 'base64').toString();
  }

  const callback = this.async();
  const config = getConfig();
  const { sidebar, pageSidebar } = config;
  const { content: markdownContent, data: setting } = matter(content);
  const resource = { resourcePath, content: markdownContent };
  const updateDate = formatDate(statSync(resourcePath).ctimeMs, true);
  const { content: mdContent, heading } = parser(resource, config.plugins);
  const sidebarTitle = setting.sidebarTitle || '';
  const showCode = getBool(setting.showCode, config.showCode);
  const showTime = getBool(setting.showTime, config.showTime);
  const showCodeIcon = getBool(setting.showCodeIcon, config.showCodeIcon);
  const showSidebar = getBool(setting.showSidebar, sidebar.show);
  const showPageSidebar = getBool(setting.showPageSidebar, pageSidebar.show);
  const sidebarDepth = getDepth(setting.sidebarDepth, sidebar.depth);
  const pageSidebarDepth = getDepth(setting.pageSidebarDepth, pageSidebar.depth);

  let edit = false;

  if (setting.showEdit !== false && config.edit) {
    edit = config.edit;
  }

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
        return { level: depth - sidebarDepth, ...rest };
      }
      return item;
    });

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
        showCode: ${showCode},
      },
      sidebarTitle: '${sidebarTitle}',
      showSidebar: ${showSidebar},
      showPageSidebar: ${showPageSidebar},
      sidebarMenus: ${formatJSON(sidebarMenus)},
      pageSidebarMenus: ${formatJSON(pageSidebarMenus)},
      updateDate: '${updateDate}',
      render() {
        return <MDXContent showIcon={${showCodeIcon}} showTime={${showTime}} showEdit={${formatJSON(
      edit,
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

  if (options.style == null && params.styleContent != null) {
    let requests = request.split('!');

    requests = requests
      .slice(0, -1)
      .concat(`${require.resolve('docfree-loader')}?style=true`, requests.slice(-1));

    requests = Array.from(new Set(requests));

    return `module.exports = require('!!${requests.join('!')}');`;
  }
};
