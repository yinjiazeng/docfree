const VuePlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  title: 'Docfree',
  type: 'browser',
  mode: 'doc',
  pageExtra: {
    path: 'https://github.com/yinjiazeng/docfree/tree/master/docs'
  },
  nav: [{
    text: '指南',
    to: '/guide',
  }, {
    text: `v${require('../../lerna.json').version}`,
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
  async: true,
  footer: 'MIT Licensed | Copyright © 2020-present',
  plugins: [
    'emoji',
    'docfree-tip',
    // ['docfree-valine', {
    //   appId: 'dGttSTqRILSLU8UewRynugPd-gzGzoHsz',
    //   appKey: '2EN9v9dynsReU0lQIdBGRno7',
    // }]
  ],
  webpack: {
    plugins: [new VuePlugin()],
    output: {
      publicPath: '/docfree/'
    },
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
