import chokidar from 'chokidar';
import { extname } from 'path';
import { getDocPath } from 'docfree-utils';
import generate from './generate';

export default function resolverWatch() {
  return new Promise((res) => {
    let timer: any = null;

    chokidar
      .watch(getDocPath(), {
        // 忽略点文件
        ignored: /(^|[/\\])\../,
      })
      .on('all', (event, path) => {
        if (
          ['addDir', 'unlinkDir'].includes(event) ||
          (['add', 'unlink'].includes(event) && /^\.mdx?$/i.test(extname(path)))
        ) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            generate();
            res();
          }, 100);
        }
      });
  });
}
