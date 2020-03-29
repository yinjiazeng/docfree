import { getConfig, formatJSON } from 'docfree-utils';
import { Routes } from './typings';
import createBlogRouteEntry from './createBlogRouteEntry';

export default function generateEntry(routes: Routes): string {
  const config = getConfig();
  const isBlog = config.mode === 'blog';
  let routesString: string;

  if (isBlog) {
    routes = createBlogRouteEntry(routes);
    routesString = formatJSON(routes);
    routesString = routesString.replace(/("children":\s*)"BlogEntry"/g, '$1<Docfree.BlogEntry />');
  } else {
    routesString = formatJSON(routes);
  }

  routesString = routesString
    .replace(/("children":\s*)"NotFound"/g, '$1<Docfree.NotFound />')
    .replace(/"require":\s*"([^"]+)"/g, '...require("$1").default');

  const content = `import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi, router } from 'nuomi';
import * as Docfree from 'docfree-components';
import 'highlight.js/styles/${config.langTheme}.css';

const routes = ${routesString};
const documentTitle = '${config.title}';

const generateData = (raw, pathname = '/', data = []) => {
  raw.forEach((route) => {
    if (route.path !== '*') {
      route.pathname = pathname;
      const { path, children, render, effects, onInit, onChange, ...rest } = route;
      if (Array.isArray(children)) {
        data = generateData(children, router.megre(pathname, path), data);
      } else${isBlog ? ' if(!/^README$/i.test(route.filename) && route.title)' : ''} {
        data.push({ path, ...rest });
      }
    }
  });
  return data;
};

// 按创建时间倒序
const dataSource = generateData(routes)
${
  isBlog
    ? `.sort(({ createTime: a }, { createTime: b }) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

const getList = (pathname, { query }) => {
  const prePath = query.referer || pathname;
  const list = [];

  dataSource.forEach(({ title, pathname: pre, filename, createTime }) => {
    if (pre.startsWith(prePath)) {
      list.push({ to: pre + filename + '?referer=' + prePath, text: title, createTime });
    }
  });

  return list;
};
`
    : ''
}
const getMenus = function(array, menus = [], list = []) {
  array.forEach((filename) => {
    if (typeof filename === 'string') {
      const name = filename.trim();

      if (name) {
        const findData = dataSource.find((item) => {
          return item.pathname === this.pathname && item.filename === name;
        });

        let menuData;
        if (findData) {
          const { pathname, filename, title, createTime } = findData;
          const menu = { to: pathname + filename, text: title, createTime };

          if (findData.path === this.path) {
            const { sidebarMenus } = this.store.getState();
            menu.menus = sidebarMenus;
          }

          menuData = menu;

        } else {
          menuData = { to: this.pathname + name, text: name, createTime: 0 };
        }

        list.push(menuData);
        menus.push(menuData);
      }
    } else if (filename && typeof filename === 'object') {
      if (Array.isArray(filename)) {
        const { menus: m, list: l } = getMenus.call(this, filename);
        list = list.concat(l);
        menus = menus.concat(m);
      } else {
        const { title, menus: ms } = filename;

        if (Array.isArray(ms)) {
          const { menus: m, list: l } = getMenus.call(this, ms);
          const menu = { text: title, menus: m };
          list = list.concat(l);
          menus.push(menu);
        } else if (title) {
          menus.push({ text: title });
        }
      }
    }
  });

  return { menus, list };
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
        ${
          isBlog && config.sidebar.data
            ? `
        const sidebarData = ${formatJSON(config.sidebar.data)};
        data = sidebarData[pathname];`
            : ''
        }
        if (data && findFilename(data.menus, filename)) {
          const { title, menus } = data;
          payload.sidebarTitle = title;

          if (Array.isArray(menus) && menus.length) {
            const { menus, list } = getMenus.call(nuomiProps, menus);

            routeData.listSource = list;
            routeData.computedSidebarMenus = menus;
          }
        } else {
          routeData.listSource = [];
          routeData.computedSidebarMenus = [{ text: title, menus: sidebarMenus }];
        }
      }

      payload.sidebarMenus = routeData.computedSidebarMenus || [];

      const listSource = ${isBlog ? 'getList(pathname, location)' : 'routeData.listSource'} || [];

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
  }
});

const globalState = {
  showSidebar: false,
  pageSidebar: false,
  sidebarTtile: '',
  sidebarMenus: [],
  pageSidebarMenus: [],
};

const nav = ${formatJSON(config.nav)};
const footer = '${config.footer}';
const routerType = '${['hash', 'browser'].includes(config.router) ? config.router : 'hash'}';

const App = () => {
  return (
    <Nuomi id="global" state={globalState}>
      <Docfree.Layout title={documentTitle} nav={nav} footer={footer} dataSource={dataSource}>
        <Router type={routerType}>
          <ShapeRoute routes={routes} />
          <Route path="*">
            <Docfree.NotFound />
          </Route>
        </Router>
      </Docfree.Layout>
    </Nuomi>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
