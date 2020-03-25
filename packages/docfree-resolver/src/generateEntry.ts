import { getConfig, formatJSON } from 'docfree-utils';
import { Routes } from './typings';
import createBlogRouteEntry from './createBlogRouteEntry';

export default function generateEntry(routes: Routes): string {
  const config = getConfig();
  let routesString: string;

  if (config.mode === 'blog') {
    routes = createBlogRouteEntry(routes);
    routesString = formatJSON(routes);
    routesString = routesString.replace(/("children":\s*)"BlogEntry"/g, '$1<BlogEntry />');
  } else {
    routesString = formatJSON(routes);
  }

  routesString = routesString
    .replace(/("children":\s*)"NotFound"/g, '$1<NotFound />')
    .replace(/"require":\s*"([^"]+)"/g, '...require("$1").default');

  const content = `import React from 'react';
import ReactDOM from 'react-dom';
import { Router, ShapeRoute, Nuomi, store, nuomi, router } from 'nuomi';
import { NotFound, BlogEntry, GlobalLayout } from 'docfree-components';
${
  config.mode !== 'blog' && config.sidebar.data
    ? `
const sidebarData = ${formatJSON(config.sidebar.data)}
const routes = ${routesString};

const isObject = (obj) => ({}).toString.call(obj) === '[object Object]';

const generateData = (raw, pathname = '/', data = []) => {
  raw.forEach((route) => {
    const { path, children, render, effects, onInit, onChange, ...rest } = route;
    route.pathname = pathname;
    if (path !== "*") {
      if (Array.isArray(children)) {
        data = generateData(children, router.megre(pathname, path), data);
      } else {
        data.push({ path, pathname, ...rest });
      }
    }
  });
  return data;
};

// 按创建时间倒序
const dataSource = generateData(routes).sort(({ createTime: a }, { createTime: b }) => {
  if (a < b) {
      return 1;
  }
  if (a > b) {
      return -1;
  }
  return 0;
});

const getMenus = function(array, menus = []) {
  array.forEach((filename) => {
    if (typeof filename === 'string') {
      const findData = dataSource.find((item) => {
        return item.pathname === this.pathname && item.filename === filename;
      });

      if (findData) {
        const { pathname, filename, title } = findData;
        const menu = { to: pathname + filename, text: title };

        if (findData.path === this.path) {
          const { sidebarMenus } = this.store.getState();
          menu.menus = sidebarMenus;
        }

        menus.push(menu);
      }
    } else if (isObject(filename)) {
      const { title, menus } = filename;

      if (title) {
        const menu = { text: title };

        if (Array.isArray(menus)) {
          menu.menus = getMenus.call(this, menus)
        }

        menus.push(menu);
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
  onInit() {
    const { title, id } = this;

    if (id !== 'global' && title) {
      const {
        path,
        pathname,
        filename,
        sidebarTitle,
        showSidebar,
        showPageSidebar,
        sidebarMenus,
        pageSidebarMenus,
      } = this;

      const payload = {
        sidebarTitle,
        showSidebar,
        showPageSidebar,
        pageSidebarMenus,
      };

      if (!this.computedMenus) {
        const data = sidebarData[pathname];

        if (data && findFilename(data.menus, filename)) {
          const { title, menus } = data;
          payload.sidebarTitle = title;

          if (Array.isArray(menus) && menus.length) {
            this.computedMenus = getMenus.call(this, menus);
          }
        } else {
          this.computedMenus = [{ to: pathname + filename, text: title, menus: sidebarMenus }];
        }
      }

      payload.sidebarMenus = this.computedMenus;

      store.dispatch({
        type: 'global/_updateState',
        payload,
      });
    }
  }
});`
    : ''
}

const globalState = {
  dataSource,
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
      <GlobalLayout nav={nav} footer={footer}>
        <Router type={routerType}>
          <ShapeRoute routes={routes} />
        </Router>
      </GlobalLayout>
    </Nuomi>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
