---
depth: 0
pageDepth: 0
pageExtra: false
title: Docfree
---

<Docfree.Home
  title="Docfree"
  description="基于webpack+nuomi开发的md静态文档生成工具"
  buttons={[{
    type: 'primary',
    text: '查看功能 →',
    to: '/guide/functions'
  }, {
    text: 'GITHUB',
    to: 'https://github.com/yinjiazeng/docfree'
  }]}
  features={[{
    title: '简洁至上',
    detail: '以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。'
  }, {
    title: 'React 驱动',
    detail: '享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。'
  }, {
    title: '插件化',
    detail: <>基于<a href="https://remark.js.org/" target="_blank">remark</a> 插件化机制，可以使用丰富的第三方插件增强写作体验。</>
  }]}
/>

## 安装使用吧

```sh
# 安装
yarn global add docfree

# 初始化
docfree init docs

# 开始写作
docfree dev docs

# 构建静态文件
docfree build docs
```
