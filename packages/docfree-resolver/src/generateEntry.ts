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

const isObject = (obj) => ({}).toString.call(obj) === '[object Object]';

const getMenus = function(array, menus = []) {
  const { global: { data } } = store.getState();

  array.forEach((filename) => {
    if (typeof filename === 'string') {
      const findData = data.find((item) => {
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

nuomi.config({
  onInit() {
    const { path, pathname, filename, title } = this;
    const state = this.store.getState();
    const { showSidebar, sidebarMenus } = state;

    if (path && showSidebar) {
      if (!this.sidebarMenus) {
        const payload = {};
        const data = sidebarData[pathname];

        if (data && findFilename(data, filename)) {
          const { title, menus } = data;

          payload.sidebarTitle = title;

          if (Array.isArray(menus) && menus.length) {
            payload.sidebarMenus = getMenus.call(this, menus);
          }
        } else {
          payload.sidebarMenus = [{ to: pathname + filename, text: title, menus: sidebarMenus }];
        }

        this.sidebarMenus = payload.sidebarMenus;
      } else {
        payload.sidebarMenus = this.sidebarMenus;
      }

      this.dispatch({
        type: '_updateState',
        payload,
      });
    }
  }
});`
    : ''
}

const routes = ${routesString};

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

const data = generateData(routes);
const nav = ${formatJSON(config.nav)};

const App = () => {
  return (
    <Nuomi id="global" state={{ data, nav }}>
      <GlobalLayout>
        <Router type="${config.router}">
          <ShapeRoute routes={routes} />
        </Router>
      </GlobalLayout>
    </Nuomi>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
