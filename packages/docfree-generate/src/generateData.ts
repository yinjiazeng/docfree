import { readdirSync, statSync } from 'fs';
import { join, extname, basename, relative } from 'path';
import { tempData, tempPath } from 'docfree-utils';

export interface RouteItem {
  path: string;
  children?: RouteItem[] | string;
  [key: string]: any;
}

export const MDX_REGEXP = /\.mdx?$/i;

export const updateData = function(p: string) {
  const data = tempData.get();
  const stat = statSync(p);
  const path = tempData.normalPath(p);

  if (!data[path]) {
    data[path] = {
      utime: stat.ctimeMs,
      ctime: stat.birthtimeMs,
    };
  } else {
    data[path].utime = stat.ctimeMs;
  }

  tempData.write(data);
};

export default function(docPath: string) {
  const data = {};
  const fileData = tempData.get();
  const entryDir = tempPath.create('');

  const generateRoutes = function(rootPath: string, array: RouteItem[] = []): RouteItem[] {
    readdirSync(rootPath).forEach((item) => {
      const itemPath = join(rootPath, item);
      const stat = statSync(itemPath);

      if (stat.isFile() && MDX_REGEXP.test(item)) {
        const path = tempData.normalPath(itemPath);
        const filename = basename(path).replace(MDX_REGEXP, '');
        const filePathData = fileData[path] || {};
        const ctime = Number(filePathData.ctime) || stat.birthtimeMs;
        const utime = Number(filePathData.utime) || stat.ctimeMs;

        data[path] = {
          ctime,
          utime,
        };

        const state = {
          ...data[path],
          pathname: path.replace(/\/[^/]+$/, '/'),
          filename,
          ext: extname(item),
          title: filename,
        };

        array.push({
          key: ctime,
          path: /^README$/i.test(filename) ? '/' : `/${filename}`,
          state: {},
          extends: [{ state }],
          require: relative(entryDir, itemPath).replace(/\\/g, '/'),
        });
      } else if (stat.isDirectory() && item !== 'node_modules' && !/^\./.test(item)) {
        array.push({
          path: `/${item}`,
          children: generateRoutes(itemPath).concat({ path: '*', children: 'NotFound' }),
        });
      }
    });

    return array;
  };

  const routes = generateRoutes(docPath);

  return {
    data,
    routes,
  };
}
