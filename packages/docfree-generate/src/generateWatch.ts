import chokidar from 'chokidar';
import { getDocPath } from 'docfree-utils';
import generate from './generate';
import { MDX_REGEXP, updateData } from './generateData';

export default function() {
  return new Promise((res) => {
    let timer: any = null;

    chokidar
      .watch(getDocPath(), {
        ignored: [/(^|[/\\])\../, /node_modules/],
      })
      .on('all', (event, path) => {
        if (
          ['addDir', 'unlinkDir'].includes(event) ||
          (['add', 'unlink'].includes(event) && MDX_REGEXP.test(path))
        ) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            generate();
            res();
          }, 100);
        }
      })
      .on('change', (path) => {
        if (MDX_REGEXP.test(path)) {
          updateData(path);
        }
      });
  });
}
