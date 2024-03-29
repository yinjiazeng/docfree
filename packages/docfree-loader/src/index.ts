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
  const params = qs.parse(resourceQuery.slice(1));

  if (params.styleContentKey) {
    const styleContent = storage.get(params.styleContentKey);

    return styleContent || '';
  }

  const callback = this.async();

  try {
    const options = getOptions(this);
    const config: any = getConfig();
    const { publicPath } = options;
    const { sidebar, plugins } = config;
    const { content: markdownContent, data: setting } = matter(content);
    const resource = { resourcePath, content: markdownContent };
    const { content: mdContent, headings: hs } = parser(resource, { plugins, publicPath });
    const sidebarDepth = getDepth(setting.depth, sidebar.depth);
    const pageSidebarDepth = getDepth(setting.pageDepth, sidebar.pageDepth);
    let title = setting.title || '';

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

    if (params.getTitleInfo && title) {
      return callback(
        null,
        `export default {
          title: '${title}',
          state: {
            title: '${title}',
            headings: ${formatJSON(headings)},
          }
        }`,
      );
    }

    content = `import React from 'react';
  import * as Docfree from 'docfree-components';

  ${mdContent}\nexport default Docfree.Content;`;

    let result = await mdx(content);

    result = result
      .replace(/(export) default/, '$1')
      .replace('/* @jsx mdx */', '')
      .replace(/\s+mdxType="[^"]+"/g, '')
      .replace(/(<[a-z][a-zA-Z]*)\sparentName="[^"]+"/g, '$1')
      .replace(
        /<(inlineCode)>([\s\S]*?)<\/\1>/g,
        (a: string, b: string, c: string) => `<code className="inline">${c}</code>`,
      )
      .replace(/(<img\s+\{\s*\.{3}\{\s*"src":\s*)"([^"]+)"/g, (a: string, b: string, c: string) => {
        if (/^\.+\//.test(c)) {
          return `${b}require('${c}').default`;
        }
        if (/^~/.test(c)) {
          return `${b}"${c.replace(/^~/, publicPath)}"`;
        }
        return a;
      });

    return callback(
      null,
      `${result}
      const props = {
        state: {
          showCode: false,
          setting: ${formatJSON(setting)},
          headings: ${formatJSON(headings)},
          showSidebar: ${sidebarDepth > 0},
          showPageSidebar: ${pageSidebarDepth > 0},
          sidebarMenus: ${formatJSON(sidebarMenus)},
          pageSidebarMenus: ${formatJSON(pageSidebarMenus)},
          utime: ${tempData.get(resourcePath).utime},
        },
        render() {
          return <MDXContent pageExtra={${formatJSON(
            setting.pageExtra !== false ? config.pageExtra : false,
          )}} />
        },
      };

      ${title ? `props.state.title='${title}';` : ''}

      export default props;
    `,
    );
  } catch (e) {
    if (e && e.message.startsWith(resourcePath)) {
      e.message = e.message.replace(/^[^:]+/, resourcePath);
    }

    return callback(e);
  }
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

    return `module.exports = require(${JSON.stringify(`!!${requests.join('!')}`)});`;
  }
};
