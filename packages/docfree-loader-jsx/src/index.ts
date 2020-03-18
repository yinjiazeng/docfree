import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import u from 'unist-builder';

module.exports = {
  lang: 'jsx',
  transform(content: string) {
    const ast = babelParser.parse(content, { plugins: ['jsx'] });
    // traverse(ast, {
    //   enter(path) {
    //     path.node = null;
    //   },
    // });
    const jsx = '';
    const code = '';
    return u('html', {
      value: `${code}

              <Playground code={\`${content.trim()}\`}>
              ${jsx}
              </Playground>
            `,
    });
  },
};
