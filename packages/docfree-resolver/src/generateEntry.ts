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
    import { Router, RouteShape, Nuomi } from 'nuomi';
    import { NotFound, BlogEntry, GlobalLayout } from 'docfree-components';

    const routes = ${routesString};

    const App = () => {
      return (
        <Nuomi id="global" data={routes}>
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
