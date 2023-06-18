(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1137:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.MDXContent=s;var o,a=n(1),l=(o=a)&&o.__esModule?o:{default:o},u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(441));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={},d=u.Content;function s(e){var t=e.components,n=f(e,["components"]);return l.default.createElement(d,i({},p,n,{components:t}),l.default.createElement(u.Home,{title:"Docfree",description:"基于webpack+nuomi开发的md静态文档生成工具",buttons:[{type:"primary",text:"查看功能 →",to:"/guide/functions"},{text:"GITHUB",to:"https://github.com/yinjiazeng/docfree"}],features:[{title:"简洁至上",detail:"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"},{title:"React 驱动",detail:"享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。"},{title:"插件化",detail:l.default.createElement(l.default.Fragment,null,"基于",l.default.createElement("a",{href:"https://remark.js.org/",target:"_blank"},"remark")," 插件化机制，可以使用丰富的第三方插件增强写作体验。")}]}),l.default.createElement("h2",null,l.default.createElement(u.AnchorLinkEnhance,{to:"安装使用吧"},"#"),l.default.createElement("span",null,"安装使用吧")),l.default.createElement("pre",null,l.default.createElement("code",{className:"language-sh"},"# 安装\nyarn global add docfree\n\n# 初始化\ndocfree init docs\n\n# 开始写作\ndocfree dev docs\n\n# 构建静态文件\ndocfree build docs\n")))}s.isMDXComponent=!0;var b={state:{showCode:!1,setting:{depth:0,pageDepth:0,pageExtra:!1,valine:!1,title:"Docfree"},headings:[{text:"安装使用吧",depth:2,level:1}],showSidebar:!1,showPageSidebar:!1,sidebarMenus:[],pageSidebarMenus:[],utime:1666602492481.416},render:function(){return l.default.createElement(s,{pageExtra:!1})}};b.state.title="Docfree",t.default=b}}]);