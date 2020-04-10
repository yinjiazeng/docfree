import { Parent, Node } from 'unist';
import { matchHtml, visit, babel, types, traverse, babelOptions } from 'docfree-utils';
import { resolve, dirname, basename } from 'path';
import { readFileSync } from 'fs';

export default () => {
  return (tree: Parent, file: any) => {
    visit(tree, 'jsx', (node: Node) => {
      const { value } = node;
      const COMPONENT_NAME = 'Docfree.Playground';

      if (typeof value === 'string' && value.startsWith(`<${COMPONENT_NAME}`)) {
        const {
          matchs: [
            {
              attrs: { src },
            },
          ],
        } = matchHtml(COMPONENT_NAME, value);

        if (src) {
          const codes: any = [];
          const render = `function() {
            const _interopRequireDefault = function(obj) { return obj && obj.default ? obj.default : obj };
            const Playground = _interopRequireDefault(require('${src}'));
            return <Playground />;
          }`;

          const absolutePath = resolve(file.dirname, src);
          const fileDirname = dirname(absolutePath);
          const content = readFileSync(absolutePath).toString();

          codes.push({
            lang: 'jsx',
            content: content.trim(),
          });

          const ast = babel.parseSync(content, {
            ...babelOptions,
            filename: basename(src),
          });

          if (ast) {
            const paths: string[] = [];

            traverse(ast, {
              ImportDeclaration(path) {
                const { source } = path.node;

                if (types.isStringLiteral(source)) {
                  paths.push(source.value);
                }
              },
              CallExpression(path) {
                const { arguments: args, callee: cle } = path.node;

                if (
                  types.isStringLiteral(args[0]) &&
                  types.isIdentifier(cle) &&
                  cle.name === 'require'
                ) {
                  paths.push(args[0].value);
                }
              },
            });

            paths.forEach((path) => {
              const matchLang = path.match(/\.(css|less|sass|scss|styl|stylus)$/);

              if (matchLang) {
                const styleContent = readFileSync(resolve(fileDirname, path)).toString();

                codes.push({
                  lang: matchLang[1],
                  content: styleContent.trim(),
                });
              }
            });

            node.value = `<${COMPONENT_NAME} code={${JSON.stringify(codes)}} render={${render}} />`;
          }
        }
      }
    });
  };
};
