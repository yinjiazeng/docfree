module.exports = {
  title: 'Docfree',
  mode: 'blog',
  nav: [{
    text: '前端',
    to: '/b'
  }, {
    text: '列表',
    to: '/a',
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
              'a',
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
};
