import * as babel from '@babel/core';
import { matchHtml, storage } from 'docfree-utils';

export default () => {
  return ({ children }, file: any) => {
    children.forEach((node: any, i: number) => {
      if (node.type === 'code' && node.lang === 'jsx') {
        const { content, matchs } = matchHtml('style', node.value.trim());
        const importStyles: string[] = [];
        const codes = [
          {
            lang: 'javascript',
            content,
          },
        ];
        let render: string = 'null';

        matchs.forEach(({ attrs: { lang, module }, content: styleContent }) => {
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

          codes.push({
            lang,
            content: styleContent,
          });
        });

        if (importStyles.length) {
          importStyles.push('');
        }

        const res = babel.transformSync(`${importStyles.join('\n')}${content}`, {
          presets: ['@babel/preset-env'],
          filename: '',
        });

        if (res && res.code) {
          //
        }

        children[i] = {
          type: 'html',
          value: `<Docfree.Playground code={${JSON.stringify(codes)}} render={${render}} />`,
        };
      }
    });
  };
};
