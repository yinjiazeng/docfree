import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi } from 'nuomi';
import * as Docfree from 'docfree-components';
import 'highlight.js/styles/github.css';

const routes = [
  {
    "path": "/",
    "pathname": "/",
    "children": <Docfree.BlogEntry />
  },
  {
    "ctime": 1586583200643.4714,
    "utime": 1586612590533.1438,
    "pathname": "/",
    "filename": "README1",
    "ext": ".md",
    "title": "README1",
    "path": "/README1",
    ...require("/Users/aniu/Documents/GitHub/docfree/docs/README1.md").default
  },
  {
    "path": "/a",
    "children": [
      {
        "path": "/",
        "pathname": "/a/",
        "children": <Docfree.BlogEntry />
      },
      {
        "ctime": 1586428092064.951,
        "utime": 1586616512271.1057,
        "pathname": "/a/",
        "filename": "README",
        "ext": ".md",
        "title": "README",
        "path": "/(README)?",
        ...require("/Users/aniu/Documents/GitHub/docfree/docs/a/README.md").default
      },
      {
        "ctime": 1586428092065.844,
        "utime": 1586617870405.4631,
        "pathname": "/a/",
        "filename": "a",
        "ext": ".md",
        "title": "a",
        "path": "/a",
        ...require("/Users/aniu/Documents/GitHub/docfree/docs/a/a.md").default
      },
      {
        "path": "*",
        "children": <Docfree.NotFound />
      }
    ]
  },
  {
    "ctime": 1586428083783.0173,
    "utime": 1586617834407.2432,
    "pathname": "/",
    "filename": "b",
    "ext": ".md",
    "title": "b",
    "path": "/b",
    ...require("/Users/aniu/Documents/GitHub/docfree/docs/b.md").default
  }
];
const documentTitle = 'Docfree.js';

const generateData = (rawData, data = []) => {
  rawData.forEach((route) => {
    if (route.path !== '*') {
      const { path, children, render, effects, onInit, onChange, ...rest } = route;
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
.sort(({ ctime: a }, { ctime: b }) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

const getList = (pathname, { query }) => {
  const prePath = query.basepath || pathname;
  const list = [];

  dataSource.forEach(({ title, pathname: pre, filename, ctime }) => {
    if (pre.startsWith(prePath) && !/^README$/i.test(filename)) {
      list.push({ to: pre + filename + '?basepath=' + prePath, text: title, ctime });
    }
  });

  return list;
};

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
          const menu = { to: pathname + filename, text: title };

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
  if (Array.isArray(menus)) {
    for(let item of menus) {
      if (item === filename) {
        return true;
      } else if (item && item.menus) {
        return findFilename(item.menus, filename);
      }
    }
  }
  return false;
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
        sidebarTitle,
        showSidebar,
        showPageSidebar,
        sidebarMenus,
        pageSidebarMenus,
        location,
        data: routeData,
      } = nuomiProps;

      const payload = {
        sidebarTitle,
        showSidebar,
        showPageSidebar,
        pageSidebarMenus,
      };

      if (!routeData.computedSidebarMenus) {
        let data;
        
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

      const listSource = getList(pathname, location) || [];

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
    const { title } = this;
    if (title) {
      document.title = title + ' | ' + documentTitle;
    } else {
      document.title = documentTitle;
    }

    window.scrollTo({ top: 0 });
  }
});

const globalState = {
  showSidebar: false,
  pageSidebar: false,
  sidebarTtile: '',
  sidebarMenus: [],
  pageSidebarMenus: [],
};

const nav = getNavMenus([
  {
    "text": "指南",
    "to": "/a"
  },
  {
    "text": "API",
    "menus": [
      {
        "text": "xx",
        "menus": [
          {
            "text": "1xxxxx",
            "to": "http://xxx"
          },
          {
            "text": "xxx",
            "to": "http://xxx"
          },
          {
            "text": "xxxx",
            "menus": [
              {
                "text": "1xxxxx",
                "to": "http://xxx"
              }
            ]
          }
        ]
      },
      {
        "text": "xxx",
        "to": "http://xxx"
      },
      {
        "text": "xxx",
        "to": "http://xxx",
        "menus": [
          {
            "text": "1xxxxx",
            "to": "http://xxx"
          },
          {
            "text": "1xxxxx",
            "to": "http://xxx"
          }
        ]
      }
    ]
  }
]);
const footer = require('/Users/aniu/Documents/GitHub/docfree/docs/.docfree/footer.js');
const routerType = 'hash';

const App = () => {
  return (
    <Router type={routerType}>
      <Nuomi id="global" state={globalState} onInit={null}>
        <Docfree.Layout title={documentTitle} nav={nav} footer={footer} dataSource={dataSource}>
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