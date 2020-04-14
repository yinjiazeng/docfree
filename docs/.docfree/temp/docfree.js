import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi } from 'nuomi';
import * as Docfree from 'docfree-components';
import 'docfree-components/lib/style/lang.less';

const routes = [
  {
    "ctime": 1586786416847.3335,
    "utime": 1586833631690.1748,
    "pathname": "/",
    "filename": "README",
    "ext": ".md",
    "title": "README",
    "path": "/",
    ...require("/Users/aniu/Documents/GitHub/docfree/docs/README.md").default
  },
  {
    "path": "/guide",
    "children": [
      {
        "ctime": 1586786416848.5488,
        "utime": 1586833631690.402,
        "pathname": "/guide/",
        "filename": "README",
        "ext": ".md",
        "title": "README",
        "path": "/",
        ...require("/Users/aniu/Documents/GitHub/docfree/docs/guide/README.md").default
      },
      {
        "ctime": 1586786416848.8818,
        "utime": 1586833631690.6343,
        "pathname": "/guide/",
        "filename": "functions",
        "ext": ".md",
        "title": "functions",
        "path": "/functions",
        ...require("/Users/aniu/Documents/GitHub/docfree/docs/guide/functions.md").default
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  }
];
const documentTitle = 'Docfree';

const generateData = (rawData, data = []) => {
  rawData.forEach((route) => {
    if (route.path !== '*') {
      const { children, render, effects, onInit, onChange, ...rest } = route;
      if (Array.isArray(children)) {
        data = generateData(children, data);
      } else if (route.title) {
        data.push(rest);
      }
    }
  });
  return data;
};

const dataSource = generateData(routes)

const getMenus = function(array, menus = [], list = []) {
  array.forEach((item) => {
    if (typeof item === 'string') {
      const name = item.trim();

      if (name) {
        const findData = dataSource.find((source) => {
          return source.pathname === this.pathname && source.filename === name;
        });

        let menuData;
        if (findData) {
          const { pathname, filename, title, ext } = findData;
          const menu = { to: pathname + (/^README$/i.test(filename) ? '' : filename), text: title };

          if (filename === this.filename && ext === this.ext) {
            menu.menus = this.sidebarMenus;
          }

          menuData = menu;

        } else {
          menuData = { to: this.pathname + name, text: name };
        }

        list.push(menuData);
        menus.push(menuData);
      }
    } else if (item && typeof item === 'object') {
      if (Array.isArray(item)) {
        const { menus: m, list: l } = getMenus.call(this, item);
        list = list.concat(l);
        menus = menus.concat(m);
      } else {
        const { text, menus: ms } = item;
        if (text) {
          if (Array.isArray(ms)) {
            const { menus: m, list: l } = getMenus.call(this, ms);
            const menu = { text, menus: m };
            list = list.concat(l);
            menus.push(menu);
          } else {
            menus.push({ text });
          }
        }
      }
    }
  });

  return { menus, list };
};

const getNavMenus = function(array, menus = []) {
  array.forEach(({ to, text, menus: ms }) => {
    if (text) {
      if (Array.isArray(ms)) {
        menus.push({
          text,
          to,
          menus: getNavMenus(ms),
        });
      } else {
        menus.push({ text, to });
      }
    }
  });
  return menus;
};

const findFilename = (menus, filename) => {
  let find = false;
  if (Array.isArray(menus)) {
    for(let item of menus) {
      if (item === filename) {
        find = true;
        break;
      } else if (!find && item && item.menus) {
        find = findFilename(item.menus, filename);
      }
    }
  }
  return find;
};

nuomi.config({
  state: {
    listSource: [],
  },
  effects: {
    initData() {
      const nuomiProps = this.getNuomiProps();
      const {
        title,
        pathname,
        filename,
        showSidebar,
        showPageSidebar,
        sidebarTitle,
        sidebarMenus,
        pageSidebarMenus,
        data: routeData,
        location,
      } = nuomiProps;

      const payload = {
        sidebarTitle,
        showSidebar: !!showSidebar,
        showPageSidebar: !!showPageSidebar,
        pageSidebarMenus,
      };

      if (!routeData.computedSidebarMenus) {
        let data;
        
        const sidebarData = {
  "/guide": {
    "title": "指南",
    "menus": [
      "README",
      "functions"
    ]
  }
};
        data = sidebarData[pathname] || sidebarData[pathname.replace(/\/+$/, '') || '/'];
        if (data && findFilename(data.menus, filename)) {
          const { title, menus } = data;
          payload.sidebarTitle = title;

          if (Array.isArray(menus) && menus.length) {
            const { menus: m, list } = getMenus.call(nuomiProps, menus);

            routeData.listSource = list;
            routeData.computedSidebarMenus = m;
          }
        } else {
          routeData.listSource = [];
          routeData.computedSidebarMenus = [{ text: title, menus: sidebarMenus }];
        }
      }

      payload.sidebarMenus = routeData.computedSidebarMenus || [];

      const listSource = routeData.listSource || [];

      this.dispatch({
        type: '_updateState',
        payload: {
          listSource,
        },
      });

      store.dispatch({
        type: 'global/_updateState',
        payload,
      });
    }
  },
  onInit() {
    const { path, title, location, data } = this;

    if (title && path !== '/') {
      document.title = title + ' | ' + documentTitle;
    } else {
      document.title = documentTitle;
    }

    // 文章页面
    if (title) {
      // search跳转来
      if (data.hash) {
        const { hash: h } = window.location;
        setTimeout(() => {
          window.location.hash = h + '#' + data.hash;
        });
        return;
      }

      if (!location.hash) {
        window.scrollTo({ top: 0 });
      }
    } else {
      // 博客首页
      if (path) {
        window.scrollTo({ top: 0 });
      }
    }
  }
});

const nav = getNavMenus([
  {
    "text": "指南",
    "to": "/guide"
  },
  {
    "text": "版本",
    "to": "https://github.com/yinjiazeng/docfree/releases"
  },
  {
    "text": "GitHub",
    "to": "https://github.com/yinjiazeng/docfree"
  }
]);
const footer = 'MIT Licensed | Copyright © 2020-present';
const routerType = 'hash';

const globalState = {
  showSidebar: false,
  pageSidebar: false,
  sidebarTtile: '',
  sidebarMenus: [],
  pageSidebarMenus: [],
};

const App = () => {
  return (
    <Router type={routerType}>
      <Nuomi id="global" state={globalState} onInit={null}>
        <Docfree.Layout type={routerType} title={documentTitle} nav={nav} footer={footer} dataSource={dataSource}>
          <ShapeRoute routes={routes} />
          <Route path="*">
            <Docfree.NotFound />
          </Route>
        </Docfree.Layout>
      </Nuomi>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));