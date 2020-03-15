import chokidar from 'chokidar';
import { extname } from 'path';
import { statSync } from 'fs';
import { getDocPath } from 'docfree-utils';
import resolver from './resolver';

export default function resolverWatch() {
  resolver();
  chokidar
    .watch(getDocPath(), {
      // 忽略点文件
      ignored: /(^|[/\\])\../,
    })
    .on('all', (event, path) => {
      if (statSync(path).isDirectory || /^\.md$/i.test(extname(path))) {
        resolver();
      }
    });
}
