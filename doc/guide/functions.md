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

## 其他功能

文档整理中...
