import { getConfig } from 'docfree-utils';
import mdx from '@mdx-js/mdx';

module.exports = async function docfreeLoader(content: string) {
  const callback = this.async();
  const config = getConfig();
  const { sidebar, mode } = config;
  let result: string;
  let title: string = '';

  const matchTitle = content.match(/#\s+(.+)/);

  if (matchTitle) {
    // eslint-disable-next-line prefer-destructuring
    title = matchTitle[1];
  }

  try {
    result = await mdx(content);
  } catch (err) {
    return callback(err);
  }

  result = result.replace('"wrapper"', 'Layout').replace('export default ', '');

  return callback(
    null,
    `
    import React from 'react';
    import { Layout, Props, Playground } from 'docfree-components';

    ${result}

    const nuomiProps = {
      state: {

        sidebar: [],
        subSidebar: [],
      },
      render: () => <MDXContent />;
    };

    ${mode !== 'blog' &&
      `
      nuomiProps.onInit = function() {
        this.dispatch({
          type: '_updateState'
        });
      }
    `}

    ${!!title &&
      `
      nuomiProps.title = '${title}';
    `}

    module.exports = nuomiProps;
  `,
  );
};
