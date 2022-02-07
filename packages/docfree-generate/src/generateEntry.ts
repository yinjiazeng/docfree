import { isAbsolute, relative } from 'path';
import { getConfig, formatJSON, tempPath } from 'docfree-utils';
import generateBlogRoutes from './generateBlogRoutes';
import { RouteItem } from './generateData';

export default function generateEntry(routes: RouteItem[]): string {
  const config = getConfig();
  const isBlog = config.mode === 'blog';
  const entryDir = tempPath.create('');
  let routesString: string;

  if (isBlog) {
    routes = generateBlogRoutes(routes);
    routesString = formatJSON(routes);
    routesString = routesString.replace(
      /("children":\s*)"BlogEntry"/g,
      `$1<Docfree.BlogEntry pageSize={${Number(config.pageSize) || 30}} />`,
    );
  } else {
    routesString = formatJSON(routes);
  }

  routesString = routesString
    .replace(/("children":\s*)"NotFound"/g, '$1<Docfree.NotFound />')
    .replace(/"require":\s*"([^"]+)"/g, '...require("$1").default');

  const content = `import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, ShapeRoute, Nuomi, store, nuomi } from '@nuomi';
import * as Docfree from 'docfree-components';
import ${
    config.langTheme
      ? `'@highlight/styles/${config.langTheme}.css';`
      : `'docfree-components/lib/style/lang.less';`
  }
${
  isAbsolute(config.footer)
    ? `import footer from '${relative(entryDir, config.footer).replace(/\\/g, '/')}';`
    : `\n\nconst footer = '${config.footer}';`
}

const routes = ${routesString};
const documentTitle = '${config.title}';

const generateData = (rawData, data = []) => {
  rawData.forEach((route) => {
    if (route.path !== '*') {
      const { children, render, effects, reducers, onInit, onChange, ...rest } = route;
      if (Array.isArray(children)) {
        data = generateData(children, data);
      } else if (${isBlog ? `route.path !== '/' && ` : ''}route.title) {
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
    : `
const getMenus = function(pre, array, menus = [], list = []) {
  array.forEach((item) => {
    if (typeof item === 'string') {
      let name = item;
      const filePath = (pre + '/').replace(/\\/+$/, '/') + item;
      const index = name.lastIndexOf('/');

      if (index !== -1) {
        name = name.substr(index+1);
      }

      if (name) {
        const findData = dataSource.find((source) => {
          return source.pathname + source.filename === filePath;
        });

        let menuData;
        if (findData) {
          const { pathname, filename, title, ext } = findData;
          const menu = { to: pathname + (/^README$/i.test(filename) ? '' : filename), text: title };

          if (this.pathname + this.filename === filePath && ext === this.ext) {
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
        const { menus: m, list: l } = getMenus.call(this, pre, item);
        list = list.concat(l);
        menus = menus.concat(m);
      } else {
        const { text, menus: ms } = item;
        if (text) {
          if (Array.isArray(ms)) {
            const { menus: m, list: l } = getMenus.call(this, pre, ms);
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
};`
}

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
        let pre;
        ${
          !isBlog && config.sidebar.data
            ? `
        const sidebarData = ${formatJSON(config.sidebar.data)};
        const filepath = pathname + filename;
        const findFilename = (prePath, menus) => {
          let find = false;
          if (Array.isArray(menus)) {
            for(let item of menus) {
              if (typeof item === 'string' && ((prePath + '/').replace(/\\/+$/, '/') + item) === filepath) {
                find = true;
                break;
              } else if (!find && item && item.menus) {
                find = findFilename(prePath, item.menus);
              }
            }
          }
          return find;
        };

        for(let i in sidebarData){
          const source = sidebarData[i] || {};
          if (pathname.startsWith(i) && findFilename(i, source.menus)) {
            data = source;
            pre = i;
            break;
          }
        }
        `
            : ''
        }
        if (data) {
          payload.sidebarTitle = data.title;
          const { menus, list } = getMenus.call(nuomiProps, pre, data.menus);
          routeData.listSource = list;
          routeData.computedSidebarMenus = menus;
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

const nav = getNavMenus(${formatJSON(config.nav)});
const routerType = '${['hash', 'browser'].includes(config.type) ? config.type : 'hash'}';
const basename = ('${
    config.webpack && config.webpack.output ? config.webpack.output.publicPath : ''
  }').replace(/^\\.+|\\/+$/, '') || '/';

const globalState = {
  showSidebar: false,
  pageSidebar: false,
  sidebarTtile: '',
  sidebarMenus: [],
  pageSidebarMenus: [],
};

const App = () => {
  return (
    <Router type={routerType} basename={basename}>
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

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
