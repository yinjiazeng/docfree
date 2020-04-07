import * as babel from '@babel/core';
import { matchHtml, storage } from 'docfree-utils';

module.exports = {
  lang: 'jsx',
  transform(content: string, args: any, { resourcePath }) {
    const { content: newContent, matchs } = matchHtml('style', content);
    const importStyles: string[] = [];
    const codes = [
      {
        lang: 'javascript',
        content: newContent,
      },
    ];

    matchs.forEach(({ attrs: { lang, module }, content: styleContent }, i: number) => {
      const styleContentKey = storage.set(styleContent);

      if (!lang) {
        lang = 'css';
      }

      module = module != null ? module || '$style' : null;

      importStyles.push(
        `import${
          module ? ` ${module} from` : ''
        } '${resourcePath}?styleContentKey=${styleContentKey}&styleLang=${lang}${
          module ? '&module=true' : ''
        }'`,
      );

      codes.push({
        lang,
        content: styleContent,
      });
    });

    if (importStyles.length) {
      importStyles.push('');
    }

    const res = babel.transformSync(`${importStyles.join('\n')}${newContent}`, {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      filename: '',
    });

    if (res && res.code) {
      const renderFunction = `function(){${res.code
        .replace(/(^|\n)(React\.createElement)/, '$1return $2')
        .replace(/\n+/g, '\n')}}`;

      return {
        type: 'html',
        value: `<Docfree.Playground code={${JSON.stringify(codes)}} render={${renderFunction}} />`,
      };
    }
  },
};
