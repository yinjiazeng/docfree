import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { Routes } from './typings';

// 解析目录生成路由
export default function resolveToRoutes(docPath: string, routes: Routes = []): Routes {
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
}
