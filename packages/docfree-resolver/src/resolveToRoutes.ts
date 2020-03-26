import { readdirSync, statSync, utimes } from 'fs';
import { join } from 'path';
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
        const filename = item.replace(/\.mdx?$/i, '');
        routes.push({
          path: /^README$/i.test(filename) ? `/(${filename})?` : `/${filename}`,
          filename,
          title: filename,
          createTime: stat.birthtimeMs,
          updateTime: stat.ctimeMs,
          require: itemPath,
        });
      }
    }
  });
  return routes;
}
