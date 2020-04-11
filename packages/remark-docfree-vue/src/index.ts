import { matchHtml, storage, traverse, types, babel, babelOptions } from 'docfree-utils';

export default () => {
  return ({ children }, file: any) => {
    children.forEach((node: any, i: number) => {
      if (node.type === 'code' && node.lang === 'vue') {
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

        style.matchs.forEach(({ attrs: { lang, module }, content: styleContent }) => {
          const styleContentKey = storage.set(styleContent);

          if (!lang) {
            lang = 'css';
          }

          module = module != null ? module || '$style' : null;

          importStyles.push(
            `import${module ? ` ${module} from` : ''} '${
              file.path
            }?styleContentKey=${styleContentKey}&styleLang=${lang}${module ? '&module=true' : ''}'`,
          );
        });

        if (importStyles.length) {
          importStyles.push('');
        }

        const visitor = {
          ExportDefaultDeclaration(path) {
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
          filename: `demo.${scriptData.attrs.lang === 'ts' ? 't' : 'j'}s`,
        });

        if (res && res.code) {
          render = `function($el) {
              const Vue = require('vue/dist/vue');
              const getVueOptions = function() {${res.code}};
              new Vue({
                ...getVueOptions(),
                el: $el,
                template: '${templateContent}',
              });
            }`.replace(/\n+/g, '\n');
        }

        children[i] = {
          type: 'jsx',
          value: `<Docfree.Playground code={${JSON.stringify(codes)}} render={${render}} />`,
        };
      }
    });
  };
};
