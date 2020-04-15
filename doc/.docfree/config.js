const VuePlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  dest: '../../docs',
  title: 'Docfree',
  mode: 'doc',
  pageExtra: {
    path: 'https://github.com/yinjiazeng/docfree/tree/master/doc'
  },
  nav: [{
    text: '指南',
    to: '/guide',
  }, {
    text: '版本',
    to: 'https://github.com/yinjiazeng/docfree/releases',
  }, {
    text: 'GitHub',
    to: 'https://github.com/yinjiazeng/docfree',
  }],
  sidebar: {
    data: {
      '/guide': {
        title: '指南',
        menus: ['README', 'functions'],
      },
    }
  },
  footer: 'MIT Licensed | Copyright © 2020-present',
  plugins: ['emoji', 'docfree-tip'],
  webpack: {
    plugins: [new VuePlugin()],
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        exclude: /\.vue$/,
        loader: 'file-loader',
      }]
    }
  },
};