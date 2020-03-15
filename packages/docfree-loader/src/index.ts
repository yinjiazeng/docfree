import { getConfig } from 'docfree-utils';
import mdx from '@mdx-js/mdx';

module.exports = async function docfreeLoader(content: string) {
  const callback = this.async();
  let result: string;
  let sidebar: any;

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
    import { Layout } from 'docfree-components';

    ${result}

    module.exports = {
      sidebar: ${sidebar},
      render() {
        return <MDXContent />
      }
    }
  `,
  );
};
