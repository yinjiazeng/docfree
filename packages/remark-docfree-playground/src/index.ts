import {
  matchHtml,
  babel,
  types,
  traverse,
  babelOptions,
  pathParse,
  UnistNode,
  VFile,
} from 'docfree-utils';
import { resolve, dirname } from 'path';
import { readFileSync } from 'fs';

const visit = ({ children }: UnistNode, file: VFile) => {
  if (Array.isArray(children)) {
    children.forEach((node: UnistNode, i) => {
      if (node.type === 'jsx') {
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
            const parsed = pathParse(src);
            const ext = parsed.ext || '.jsx';
            const codes: any = [];

            const absolutePath = resolve(file.dirname || '', parsed.path);
            const fileDirname = dirname(absolutePath);
            const content = readFileSync(absolutePath).toString();

            if (/^\.(js|ts)x?$/.test(ext)) {
              const render = `function() {
                const _interopRequireDefault = function(obj) { return obj && obj.default ? obj.default : obj };
                const Playground = _interopRequireDefault(require('${parsed.path}'));
                return <Playground />;
              }`;

              const ast = babel.parseSync(content, {
                ...babelOptions,
                filename: `demo${ext}`,
              });

              if (ast) {
                traverse(ast, {
                  ImportDeclaration(path) {
                    const { source } = path.node;
                    let matchLang: RegExpMatchArray | null = null;

                    if (
                      types.isStringLiteral(source) &&
                      // eslint-disable-next-line no-cond-assign
                      (matchLang = source.value.match(/\.(css|less|sass|scss|styl|stylus)$/))
                    ) {
                      const styleContent = readFileSync(
                        resolve(fileDirname, source.value),
                      ).toString();

                      codes.push({
                        lang: matchLang[1],
                        content: styleContent.trim(),
                      });

                      path.remove();
                    }
                  },
                });

                codes.unshift({
                  lang: /^\.jsx?$/.test(ext) ? 'javascript' : 'typescript',
                  content: content.trim(),
                });

                node.value = `<${COMPONENT_NAME} code={${JSON.stringify(
                  codes,
                )}} render={${render}} />`;
              }
            } else {
              children[i] = {
                type: 'code',
                lang: ext.replace(/^\./, ''),
                value: content.trim(),
              };
            }
          }
        }
      } else if (node.children) {
        visit(node, file);
      }
    });
  }
};

export default function() {
  return function(tree: UnistNode, file: VFile): void {
    visit(tree, file);
  };
}
