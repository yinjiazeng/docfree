import {
  matchHtml,
  storage,
  types,
  babel,
  babelOptions,
  VFile,
  UnistNode,
  NodePath,
} from 'docfree-utils';

export interface Node extends UnistNode {
  lang?: string;
}

export default function() {
  return function({ children }: UnistNode, file: VFile) {
    if (Array.isArray(children)) {
      children.forEach((node: Node, i) => {
        if (node.type === 'code' && typeof node.value === 'string' && node.lang === 'vue') {
          const content = node.value.trim();
          const script = matchHtml('script', content);
          const scriptData = script.matchs[0] || { attrs: {}, content: '' };
          const scriptContent = scriptData.content;
          const template = matchHtml('template', script.content);
          const templateContent = (template.matchs[0] || {}).content || '';
          const style = matchHtml('style', template.content);
          const importStyles: string[] = [];
          const codes = [
            {
              lang: 'vue',
              content,
            },
          ];
          let render: string = 'null';

          const visitor = {
            ExportDefaultDeclaration(path: NodePath) {
              const { declaration }: any = path.node;
              const returnStatement: any = types.returnStatement(declaration);

              path.replaceWith(returnStatement);
            },
          };

          const res = babel.transformSync(scriptContent, {
            presets: babelOptions.presets,
            plugins: [
              {
                visitor,
              },
            ],
            filename: `${file.path}.${scriptData.attrs.lang === 'ts' ? 't' : 'j'}s`,
          });

          if (res && res.code) {
            style.matchs.forEach(({ attrs: { lang, module }, content: styleContent }) => {
              const styleContentKey = storage.set(styleContent);

              if (!lang) {
                lang = 'css';
              }

              const mod: any = module != null ? module || '$style' : null;

              importStyles.push(
                `${
                  mod ? `data['${mod === '$style' ? `docfree${mod}` : mod}'] = ` : ''
                }require(${JSON.stringify(
                  `${file.path}?styleContentKey=${styleContentKey}&styleLang=${lang}${
                    mod ? '&module=true' : ''
                  }`,
                )});`,
              );
            });

            if (importStyles.length) {
              importStyles.push('');
            }

            render = `function($el) {
                const Vue = require('vue/dist/vue');
                const getVueOptions = function() {${res.code}};
                const { mixins = [], ...rest } = getVueOptions() || {};
                const data = {};
                ${importStyles.join('\n')}
                let template = \`${templateContent}\`;
                if (data.docfree$style) {
                  template = template.replace(/(\\$style\\.)/g, 'docfree$1');
                }
                new Vue({
                  ...rest,
                  el: $el,
                  template,
                  mixins: [...mixins, {
                    data,
                  }]
                });
              }`.replace(/\n+/g, '\n');
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
