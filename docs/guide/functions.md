# 查看功能

## 展示组件

```jsx
import React from 'react';
import { Button } from 'antd';

<div className={$style.buttons}>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="link">Link</Button>
</div>

<style lang="less" module>
.buttons {
  & > button {
    margin-right: 8px;
  }
}
</style>
```

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

## 引入文件展示组件

```js
<Docfree.Playground src="./Demo.jsx" />
```

<Docfree.Playground src="./Demo.jsx" />

## 自动生成组件文档

```js
<Docfree.Props src="./Demo.jsx" />
```

<Docfree.Props src="./Demo.jsx" />

## 插件使用

### 支持Vue

```js
// docs/.docfree/config.js

const VuePlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  // ...其他选项
  plugins: ['docfree-vue'],
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

### 支持emoji

```sh
yarn add --dev remark-emoji
```

```js
// docs/.docfree/config.js

module.exports = {
  // ...其他选项
  plugins: ['emoji'],
};
```

```
:dog: :+1: :+1: :+1: :+1: :+1:
```

:dog: :+1: :+1: :+1: :+1: :+1:

## 其他功能

文档整理中...
