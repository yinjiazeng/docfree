module.exports = {
  title: 'Docfree',
  // mode: 'blog',
  nav: [{
    text: '前端',
    to: '/b'
  }, {
    text: '列表',
    menus: [{
      text: '列表',
      menus: [{
        text: '列表',
        to: '/a',
      }]
    }]
  }],
  sidebar: {
    data: {
      '/': {
        title: '标题',
        menus: [
          {
            text: 'xx',
            menus: [
              'c',
              'b',
            ]
          },
          {
            text: 'xxxxx',
            menus: [
              'README'
            ]
          }
        ]
      }
    }
  },
  footer: 'MIT Licensed | Copyright © 2020-present',
  plugins: [],
  pageExtra: {
    path: 'https://github.com/yinjiazeng/docfree/tree/master/docs'
  }
};
