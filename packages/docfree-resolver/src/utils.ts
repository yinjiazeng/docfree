import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { getConfig } from 'docfree-utils';
import { Routes } from './typings';

// 解析目录生成路由
export const resolveToRoutes = (docPath: string, routes: Routes = []): Routes => {
  const readdir = readdirSync(docPath);
  readdir.forEach((item) => {
    // 排除.开头文件或文件夹
    if (!/^\./.test(item)) {
      const itemPath = join(docPath, item);
      const stat = statSync(itemPath);
      if (stat.isDirectory()) {
        routes.push({
          path: `/${item}`,
          children: resolveToRoutes(itemPath, []).concat({ path: '*', children: 'NotFound' }),
        });
      } else if (/\.mdx?$/i.test(item)) {
        routes.push({
          path: /^README$/i.test(basename(item)) ? `/(${item})?` : `/${item}`,
          require: itemPath,
        });
      }
    }
  });
  return routes;
};

export const generateEntry = (routes: Routes): string => {
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
};
