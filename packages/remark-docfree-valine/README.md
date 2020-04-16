## 介绍

[valine](https://valine.js.org)评论插件

## 使用

先去[LeanCloud](https://leancloud.cn/)申请`appId`和`appKey`

```
yarn add valine leancloud-storage remark-docfree-valine
```

```js
// config.js

module.exports = {
  //...其他选项
  plugins: [
    ['docfree-valine', {
      appId: '<APP_Id>',
      appKey: '<APP_Key>',
    }],
  ],
};

```

如果某个页面需要隐藏评论，请在md文件顶部设置区域添加`valine: false`
