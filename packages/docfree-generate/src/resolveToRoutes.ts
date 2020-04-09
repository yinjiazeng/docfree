import { readdirSync, statSync } from 'fs';
import { formatDate } from 'docfree-utils';
import { join, extname } from 'path';
import { Routes } from './typings';

export default function resolveToRoutes(docPath: string, routes: Routes = []): Routes {
  const readdir = readdirSync(docPath);

  readdir.forEach((item) => {
    if (!/^\./.test(item)) {
      const itemPath = join(docPath, item);
      const stat = statSync(itemPath);

      if (stat.isDirectory() && item !== 'node_modules') {
        routes.push({
          path: `/${item}`,
          children: resolveToRoutes(itemPath, []).concat({ path: '*', children: 'NotFound' }),
        });
      } else if (/\.mdx?$/i.test(item)) {
        const filename = item.replace(/\.mdx?$/i, '');

        routes.push({
          path: /^README$/i.test(filename) ? `/(${filename})?` : `/${filename}`,
          filename,
          ext: extname(item),
          title: filename,
          createTime: stat.birthtimeMs,
          createDate: formatDate(stat.birthtimeMs),
          require: itemPath,
        });
      }
    }
  });
  return routes;
}
