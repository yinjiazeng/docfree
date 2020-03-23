import * as babel from '@babel/core';

module.exports = {
  lang: 'jsx',
  transform(content: string, styles) {
    const res = babel.transformSync(content, {
      configFile: false,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    });

    if (res && res.code) {
      const renderFunction = `function(){${res.code
        .replace(/(^|\n)(React\.createElement)/, '$1return $2')
        .replace(/\n+/g, '\n')}}`;

      return {
        type: 'html',
        value: `<Playground styles={${JSON.stringify(
          styles,
        )}} code={{ lang: 'jsx', content: '${content}' }} render={${renderFunction}} />`,
      };
    }
  },
};
