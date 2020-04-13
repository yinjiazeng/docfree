module.exports = {
  title: 'Docfree',
  mode: 'doc',
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
};
