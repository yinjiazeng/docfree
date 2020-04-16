## 介绍

增强markdown图片语法功能，如果url以 `~` 开头，则会被替换为publicPath，默认是 `''`。

```js
remark()
  .use(remarkEnhanceImage, { publicPath: 'htttp://domain/' })
  .processSync('![图片1](~img/1.png)');

//=> ![图片1](htttp://domain/img/1.png)
```
