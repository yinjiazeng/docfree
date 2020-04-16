## 介绍

增强markdown链接语法功能，自动将链接转为新窗口打开，还可以为链接增加属性

```
[链接](http://domain '{ target: '_blank', title: '链接', ... }')
```

如果url以 `~` 开头，则会被替换为publicPath，默认是 `''`

```js
remark()
  .use(remarkEnhanceLink, { publicPath: 'htttp://domain/' })
  .processSync('[下载](~file/file.zip)');

//=> [下载](htttp://domain/file/file.zip)
```
