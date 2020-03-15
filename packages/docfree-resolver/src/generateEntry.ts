import { Routes } from './typings';

export default function generateEntry(routes: Routes): string {
  const routesString = JSON.stringify(routes)
    .replace(/("children":)"NotFound"/g, '$1<NotFound />')
    .replace(/"require":"([^"]+)"/g, '...require("$1")');

  const content = `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Router, RouteShape } from 'nuomi';
    import { NotFound, Layout } from 'docfree-components';

    const routes = ${routesString};

    const App = () => {
      return (
        <Router>
          <Layout data={routes}>
            <RouteShape routes={routes} />
          </Layout>
        </Router>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
    `;

  return content;
}
