import {
  matchHtml,
  storage,
  babel,
  types,
  babelOptions,
  VFile,
  UnistNode,
  NodePath,
} from 'docfree-utils';

export default function() {
  return function({ children }: UnistNode, file: VFile) {
    if (Array.isArray(children)) {
      children.forEach((node: UnistNode, i) => {
        if (
          node.type === 'code' &&
          typeof node.value === 'string' &&
          (node.lang === 'jsx' || node.lang === 'tsx')
        ) {
          const { content, matchs } = matchHtml('style', node.value.trim());
          const importStyles: string[] = [];
          const codes = [
            {
              lang: node.lang === 'jsx' ? 'javascript' : 'typescript',
              content,
            },
          ];
          let render: string = 'null';

          matchs.forEach(({ attrs: { lang, module }, content: styleContent }) => {
            const styleContentKey = storage.set(styleContent);

            if (!lang) {
              lang = 'css';
            }

            const mod: any = module != null ? module || '$style' : null;

            importStyles.push(
              `import${mod ? ` ${mod} from` : ''} ${JSON.stringify(
                `${file.path}?styleContentKey=${styleContentKey}&styleLang=${lang}${
                  mod ? '&module=true' : ''
                }`,
              )}`,
            );

            codes.push({
              lang,
              content: styleContent,
            });
          });

          if (importStyles.length) {
            importStyles.push('');
          }

          const visitor = {
            ImportDefaultSpecifier(path: NodePath) {
              if (
                types.isImportDeclaration(path.parent) &&
                types.isStringLiteral(path.parent.source) &&
                path.parent.source.value === 'react'
              ) {
                path.remove();
              }
            },
          };

          const res = babel.transformSync(`${importStyles.join('\n')}${content}`, {
            presets: babelOptions.presets,
            plugins: [
              {
                visitor,
              },
            ],
            filename: `${file.path}.${node.lang}`,
          });

          if (res && res.code) {
            render = `function(){${res.code
              .replace(/(^|\n)(React\.createElement)/, '$1return $2')
              .replace(/\n+/g, '\n')}}`;
          }

          children[i] = {
            type: 'jsx',
            value: `<Docfree.Playground code={${JSON.stringify(codes)}} render={${render}} />`,
          };
        }
      });
    }
  };
}
