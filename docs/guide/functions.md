---
title: 查看功能
---

## 展示组件

```jsx
import React from 'react';
import { Button } from 'antd';

<div className="buttons">
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="link">Link</Button>
</div>

<style lang="less">
.buttons {
  & > button {
    margin-right: 8px;
  }
}
</style>
```

**markdown代码**

```js
//```jsx
import React from 'react';
import { Button } from 'antd';

<div className="buttons">
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="link">Link</Button>
</div>

<style lang="less">
.buttons {
  & > button {
    margin-right: 8px;
  }
}
</style>
//```
```

可以直接在`jsx`中使用`style`标签写样式，`lang`支持`css/less/sass/scss/styl/stylus`，默认支持`css/less`，其他支持需安装对应的`loader`。
也支持`cssModules`，通过`$style`获取样式，熟悉`Vue`的应该知道怎么用。

## 支持Typescript

```tsx
import React, { ElementType } from 'react';
import { Button } from 'antd';

const Buttons: ElementType<any> = () => (
  <div className={$style.buttons}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
);

<Buttons />

<style lang="less" module>
.buttons {
  & > button {
    margin-right: 8px;
  }
}
</style>
```

**markdown代码**

```js
//```tsx
import React, { ElementType } from 'react';
import { Button } from 'antd';

const Buttons: ElementType<any> = () => (
  <div className={$style.buttons}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
);

<Buttons />

<style lang="less" module>
.buttons {
  & > button {
    margin-right: 8px;
  }
}
</style>
//```
```

## 引入文件展示组件

<Docfree.Playground src="./Demo.jsx" />

**markdown代码**

```js
<Docfree.Playground src="./Demo.jsx" />
```

## 自动生成组件文档

<Docfree.Props src="./Demo.jsx" />

**markdown代码**

```js
<Docfree.Props src="./Demo.jsx" />
```

`src`引入的组件需包含`defaultProps`和`propTypes`2个静态对象，并且需要在组件外部定义，类组件不要使用`static`定义，否则无法解析，
`propTypes`对象的值必须用 [prop-types](https://github.com/facebook/prop-types) 定义，可以在属性的上方使用`//`或`/**/`注释
自动生成接口说明。

```tip:warning
注意
<Docfree.Props /> 和 <Docfree.Playground /> src属性必须包含文件类型后缀，比如.jsx/.tsx。
```


## 支持Vue

```sh
yarn add webpack vue-loader vue vue-template-compiler
```

```js
// docs/.docfree/config.js

const VuePlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  // ...其他选项
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
```

```vue
<template>
  <div :class="$style.div">
    <p>点击试一试</p>
    <button-counter></button-counter>
  </div>
</template>

<script>
import buttonCounter from './button-counter.vue';

export default {
  components: {
    'button-counter': buttonCounter,
  }
}
</script>

<style lang="less" module>
.div {
  & > p {
    color: #1890ff;
  }
}
</style>
```

**markdown代码**

```html
//```vue
<template>
  <div :class="$style.div">
    <p>点击试一试</p>
    <button-counter></button-counter>
  </div>
</template>

<script>
import buttonCounter from './button-counter.vue';

export default {
  components: {
    'button-counter': buttonCounter,
  }
}
</script>

<style lang="less" module>
.div {
  & > p {
    color: #1890ff;
  }
}
</style>
//```
```

## 插件使用

### tip

```sh
yarn add antd remark-docfree-tip remark-emoji
```

```js
// docs/.docfree/config.js

module.exports = {
  // ...其他选项
  plugins: ['docfree-tip'],
};
```

```tip:success:jsx
正确
<div></div>
```

```tip:error:jsx
错误
<div></d>
```

**markdown代码**

```
//```tip:success:jsx
正确
<div></div>
//```

//```tip:error:jsx
错误
<div></d>
//```
```

### emoji

```sh
yarn add remark-emoji
```

```js
// docs/.docfree/config.js

module.exports = {
  // ...其他选项
  plugins: ['emoji'],
};
```

:dog: :+1: :+1: :+1: :+1: :+1:

**markdown代码**

```
:dog: :+1: :+1: :+1: :+1: :+1:
```

## 目录介绍

文档根目录下包含`.docfree`文件夹，该文件夹用于存放配置相关文件，`config.js`是主配置文件，`public`是静态资源目录，默认只有index.html，你可以在里面新建任意文件或者文件夹，编译时都会被拷贝到构建目录下。
如果需要在index.html中引入一些资源可以通过`<%= htmlWebpackPlugin.options.publicPath %>`作为资源路径前缀。
`temp`是临时文件目录，目前里面包含`data.json`和`docfree.js`，data.json是存储文件时间数据的，该文件提交时不可以忽略，否则展示最终编辑时间和排序都会丢失，docfree.js是入口文件，每次都会自动生成，无需提交，
请自行设置在`.gitignore`中。

## 路由

docfree将所有`md` `mdx`文件以及非`.`开头的文件夹解析为路由，格式是`目录/文件名`，文件名后缀会被忽略。例如根目录下包含a.md，会被解析为路由`/a`，b目录会被解析为`/b`，b目录下的c文件会被解析为`/b/c`，
依次类推，同一目录下文件名和文件夹名不要重名，否则只会解析文件夹。在`doc`模式时，如果文件为README.md，那么访问时文件名会被忽略，例如`/README`需用`/`访问。

## 配置

<Docfree.Props
  datas={[
    ['type', '"hash" | "browser"', '"hash"', '路由类型'],
    ['mode', '"doc" | "blog"', '"doc"', '页面模式'],
    ['title', 'string', '-', '页面title以及logo文字内容'],
    ['dest', 'string', '.docfree/dist', '生成静态文件目录'],
    ['footer', 'string', '', '页面脚注内容，支持字符串或者js文件路径，路径必须是绝对路径，js中可以使用React'],
    ['nav', 'array', '', '导航配置，数组内容为 { "to": "跳转的链接", "text": "导航文字", "menus": 子集导航数组，数据等同父级 }，to 和 menus不是必须的，to 值包含http或者https时会被作为外部链接，否则作为路由'],
    ['sidebar', 'object', '{ "depth": 3, "pageDepth": 6, data: null }', '侧边栏配置，depth是左侧导航深度，pageDepth是右侧导航深度，深度值设置为0将不展示侧边栏，data为配置数据，具体下面讲'],
    ['pageExtra', 'object', '{ "platform": "Github", "path": "", "format": "yyyy/MM/dd hh:mm:ss" }', '页面底部额外数据设置，包含日期和编辑链接，path是编辑链接，需设置为相应平台文档根目录'],
    ['langTheme', 'string', '', 'highlight.js主题样式'],
    ['pageSize', 'number', '30', 'bolg模式时列表展示数量'],
    ['plugins', 'array', '', 'remark插件，如果是字符串，可以忽略remrk-前缀'],
    ['webpack', 'object', '', 'webpack配置'],
    ['async', 'boolean', 'false', '是否按需加载模块'],
  ]}
/>

## 侧边栏配置

默认时，每个页面的侧边栏只会包含该页面的标题和子标题，通过配置可以让侧边栏展示其他页面的标题

```js
// 格式如下
{
  depth: 3,
  data: {
    '/': {
      title: '侧边栏标题',
      menus: [
        'README',
        'a',
        {
          text: '',
          menus: [...]
        }
      ]
    },
    '/guide': {
      title: '侧边栏标题',
      menus: [{
        text: '',
        menus: [{
          text: '',
          menus: [...]
        }]
      }]
    }
  }
}
```

`data`值为一个对象，键为目录，`/`表示根目录，值对对象，包含`title`和`menus`字段，`title`为侧边栏大标题，非必须，menus为该目录下文件名数组，`.md`后缀需要省略，这样，每个页面都会展示其他页面的标题。
menus数组值也可以设置为对象，用于为侧边栏配置子标题，必须包含`text`字段。

## 页面设置

`config.js`用于全局配置，每个`md`文件也可以通过设置来覆盖全局配置，设置项需要在文件内容顶部。

```
---
title: 标题
depth: 侧边栏深度
pageDepth: 子（右）侧边栏深度
pageExtra: false 只可以设置false 用于隐藏额外内容
---
```

## 主题

docfree界面是使用`antd4.0`开发的，预处理器使用的是less，修改主题样式需要在`.docfree`目录下新建`modify-vars.js`，导出对象即可，具体参考[Ant Design 的样式变量](https://ant-design.gitee.io/docs/react/customize-theme-cn#Ant-Design-的样式变量)

## 组件

整理中...

## 插件开发

整理中...

## 其他功能

整理中...
