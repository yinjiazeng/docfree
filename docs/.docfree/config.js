const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  title: 'Docfree.js',
  mode: 'blog',
  footer: 'MIT Licensed | Copyright © 2019-present',
  nav: [
    {
      text: '指南',
      to: '/a',
    },
    {
      text: 'API',
      menus: [
        {
          text: 'xx',
          menus: [
            {
              text: '1xxxxx',
              to: 'http://xxx',
            },
            {
              text: 'xxx',
              to: 'http://xxx',
            },
            {
              text: 'xxxx',
              menus: [
                {
                  text: '1xxxxx',
                  to: 'http://xxx',
                },
              ],
            },
          ],
        },
        {
          text: 'xxx',
          to: 'http://xxx',
        },
        {
          text: 'xxx',
          to: 'http://xxx',
          menus: [
            {
              text: '1xxxxx',
              to: 'http://xxx',
            },
            {
              text: '1xxxxx',
              to: 'http://xxx',
            },
          ],
        },
      ],
    },
  ],
  sidebar: {
    data: {
      '/': {
        title: '指南',
        menus: [],
      },
    },
  },
  plugins: ['emoji'],
  ignoreExts: [/\.vue$/],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
};
