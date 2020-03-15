import { getConfig } from 'docfree-utils';
import { Routes } from './typings';
import createBlogRouteEntry from './createBlogRouteEntry';

export default function generateEntry(routes: Routes): string {
  const config = getConfig();
  let routesString: string;

  if (config.mode === 'blog') {
    routes = createBlogRouteEntry(routes);
    routesString = JSON.stringify(routes);
    routesString = routesString.replace(/("children":)"BlogEntry"/g, '$1<BlogEntry />');
  } else {
    routesString = JSON.stringify(routes);
  }

  routesString = routesString
    .replace(/("children":)"NotFound"/g, '$1<NotFound />')
    .replace(/"require":"([^"]+)"/g, '...require("$1")');

  const content = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Router, RouteShape, Nuomi, store, nuomi, router } from 'nuomi';
    import { NotFound, BlogEntry, GlobalLayout } from 'docfree-components';

    ${config.mode !== 'blog' &&
      `
    const sidebarData = ${JSON.stringify(config.sidebar.data || {})};

    nuomi.config({
      effects: {
        updateState() {
          const { global: { data } } = store.getState();
          sidebarData
        },
      },
    });
    `}

    const routes = ${routesString};
    const generateData = (raw, parentPath = '/', data = []) => {
      raw.forEach(({ path, children, render, effects, onInit, onChange, ...rest }) => {
        if (Array.isArray(children)) {
          data = generateData(children, router.megre(parentPath, path), data);
        } else {
          data.push({ path: parentPath, ...rest });
        }
      });
      return data;
    };
    const data = generateData(routes);

    const App = () => {
      return (
        <Nuomi id="global" state={{ data }}>
          <GlobalLayout>
            <Router>
              <RouteShape routes={routes} />
            </Router>
          </GlobalLayout>
        </Nuomi>
      );
    };

    const rootNode = document.createElement('div');
    document.body.prepend(rootNode);

    ReactDOM.render(<App />, rootNode);
    `;

  return content;
}
