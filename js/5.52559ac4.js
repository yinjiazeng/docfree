(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1138:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.MDXContent=s;var l,a=n(1),o=(l=a)&&l.__esModule?l:{default:l},u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(441));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p={},d=u.Content;function s(e){var t=e.components,n=i(e,["components"]);return o.default.createElement(d,f({},p,n,{components:t}),o.default.createElement("h1",null,o.default.createElement(u.AnchorLinkEnhance,{to:"介绍"},"#"),o.default.createElement("span",null,"介绍")),o.default.createElement("p",null,o.default.createElement("code",{className:"inline"},"docfrees"),"是基于",o.default.createElement("code",{className:"inline"},"webpack"),"+",o.default.createElement("code",{className:"inline"},"nuomi"),"开发的md静态文档生成工具"),o.default.createElement("h2",null,o.default.createElement(u.AnchorLinkEnhance,{to:"特性"},"#"),o.default.createElement("span",null,"特性")),o.default.createElement("ul",null,o.default.createElement("li",null,"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"),o.default.createElement("li",null,"享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。"),o.default.createElement("li",null,"基于",o.default.createElement("a",{href:"https://remark.js.org/",target:"_blank"},"remark"),"插件化机制，可以使用丰富的第三方插件增强写作体验。")),o.default.createElement("h2",null,o.default.createElement(u.AnchorLinkEnhance,{to:"它能做什么？"},"#"),o.default.createElement("span",null,"它能做什么？")),o.default.createElement("p",null,"写组件库文档，写博客。"))}s.isMDXComponent=!0;var m={state:{showCode:!1,setting:{},headings:[{text:"特性",depth:2,level:1},{text:"它能做什么？",depth:2,level:1}],showSidebar:!0,showPageSidebar:!0,sidebarMenus:[{text:"特性",depth:2,level:1},{text:"它能做什么？",depth:2,level:1}],pageSidebarMenus:[],utime:1586914285717.9224},render:function(){return o.default.createElement(s,{pageExtra:{platform:"Github",path:"https://github.com/yinjiazeng/docfree/tree/master/docs",format:"yyyy/MM/dd hh:mm:ss"}})}};m.state.title="介绍",t.default=m}}]);