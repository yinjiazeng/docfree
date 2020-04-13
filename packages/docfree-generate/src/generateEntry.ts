import { isAbsolute } from 'path';
import { getConfig, formatJSON } from 'docfree-utils';
import generateBlogRoutes from './generateBlogRoutes';
import { RouteItem } from './generateData';

export default function generateEntry(routes: RouteItem[]): string {
  const config = getConfig();
  const isBlog = config.mode === 'blog';
  let routesString: string;

  if (isBlog) {
    routes = generateBlogRoutes(routes);
    routesString = formatJSON(routes);
    routesString = routesString.replace(
      /("children":\s*)"BlogEntry"/g,
      `$1<Docfree.BlogEntry pageSize={${Number(config.pageSize) || 20}} />`,
    );
  } else {
    routesString = formatJSON(routes);
  }

  routesString = routesString
    .replace(/("children":\s*)"NotFound"/g, '$1<Docfree.NotFound />')
    .replace(/"require":\s*"([^"]+)"/g, '...require("$1").default');

  const content = `import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi } from 'nuomi';
import * as Docfree from 'docfree-components';
import ${
    config.langTheme
      ? `'highlight.js/styles/${config.langTheme}.css';`
      : `'docfree-components/lib/style/lang.less';`
  }

const routes = ${routesString};
const documentTitle = '${config.title}';

const generateData = (rawData, data = []) => {
  rawData.forEach((route) => {
    if (route.path !== '*') {
      const { path, children, render, effects, onInit, onChange, ...rest } = route;
      if (Array.isArray(children)) {
        data = generateData(children, data);
      } else if (${isBlog ? `path !== '/' && ` : ''}route.title) {
        data.push(rest);
      }
    }
  });
  return data;
};

const dataSource = generateData(routes)
${
  isBlog
    ? `.sort(({ ctime: a }, { ctime: b }) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});

const getList = (pathname, { query }) => {
  const prePath = query._ || pathname;
  const list = [];

  dataSource.forEach(({ title, pathname: pre, filename, ctime }) => {
    if (pre.startsWith(prePath)) {
      list.push({ to: pre + filename + '?_=' + prePath, text: title, ctime });
    }
  });

  return list;
};
`
    : ''
}
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
        ${
          !isBlog && config.sidebar.data
            ? `
        const sidebarData = ${formatJSON(config.sidebar.data)};
        data = sidebarData[pathname];`
            : ''
        }
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

const nav = getNavMenus(${formatJSON(config.nav)});
const footer = ${isAbsolute(config.footer) ? `require('${config.footer}')` : `'${config.footer}'`};
const routerType = '${['hash', 'browser'].includes(config.router) ? config.router : 'hash'}';

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

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
