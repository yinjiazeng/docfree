import * as babel from '@babel/core';
import { matchHtml, tempPath } from 'docfree-utils';
import { resolve } from 'path';

module.exports = {
  lang: 'jsx',
  transform(content: string, args: any, { filePath }) {
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

      const fileName = `style/${filePath.replace(/[/\\]/g, '_')}_${i}.${lang}`;
      const path = tempPath.write(fileName, styleContent);

      importStyles.push(`import '${path}'`);

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