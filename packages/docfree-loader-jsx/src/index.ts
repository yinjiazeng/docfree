import * as babel from '@babel/core';

module.exports = {
  lang: 'jsx',
  transform(content: string) {
    const res = babel.transformSync(content, {
      configFile: false,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    });

    if (res && res.code) {
      const renderFunction = `function(){${res.code.replace(
        /(^|\n)(React\.createElement)/,
        '$1return $2',
      )}}`;

      return {
        type: 'html',
        value: `<Playground code={\`${content}\`} render={${renderFunction}} />`,
      };
    }
  },
};
