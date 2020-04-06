import * as babel from '@babel/core';
import { matchHtml } from 'docfree-utils';

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

    matchs.forEach(({ attrs: { lang }, content: styleContent }, i: number) => {
      if (!lang) {
        lang = 'css';
      }

      importStyles.push(
        `import '${resourcePath}?styleContent=${Buffer.from(styleContent).toString(
          'base64',
        )}&styleLang=${lang}'`,
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
