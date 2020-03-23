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
    .replace(/"require":\s*"([^"]+)"/g, '...require("$1")');

  const content = `import React from 'react';
import ReactDOM from 'react-dom';
import { Router, ShapeRoute, Nuomi, store, nuomi, router } from 'nuomi';
import { NotFound, BlogEntry, GlobalLayout } from 'docfree-components';
${
  config.mode !== 'blog' && config.sidebar.data
    ? `
const sidebarData = ${formatJSON(config.sidebar.data)}

nuomi.config({
  onInit() {
    const { path, baseName } = this;
    const { showSidebar } = this.store.getState();
    if (showSidebar) {
      const pre = path.substr(0, path.lastIndexOf('/'));
      const prePath = pre || '/';
      if (sidebarData[prePath]) {
        const { title: sidebarTitle, list } = sidebarData[prePath];
        const { global: { data } } = store.getState();
        const payload = {
          sidebarTitle,
        };

        if (Array.isArray(list)) {
          payload.sidebarMenus = list.map((name) => {
            const findData = data.find((item) => {
              return item.path === prePath && item.baseName === name;
            });
            let menu;
            if (findData) {
              menu = { path: pre + '/' + findData.fileName, title: findData.title }
            } else {
              menu = { path: pre + '/' + name + '.md', title: name };
            }
            return menu;
          })
        }

        this.dispatch({
          type: '_updateState',
          payload,
        });
      }
    }
  }
});`
    : ''
}

const routes = ${routesString};

const generateData = (raw, parentPath = '/', data = []) => {
  raw.forEach(({ path, children, render, effects, onInit, onChange, ...rest }) => {
    if (path !== "*") {
      if (Array.isArray(children)) {
        data = generateData(children, router.megre(parentPath, path), data);
      } else {
        data.push({ path: parentPath, ...rest });
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
        <Router>
          <ShapeRoute routes={routes} />
        </Router>
      </GlobalLayout>
    </Nuomi>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

  return content;
}
