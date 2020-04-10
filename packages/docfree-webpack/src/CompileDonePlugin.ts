import { Compiler } from 'webpack';
import { resolve } from 'path';
import { logger, chalk } from 'docfree-utils';

export default class CompileDonePlugin {
  options = {};

  constructor(options: any) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.beforeCompile.tap('compile-done-plugin', () => {
      logger.clear();
    });

    compiler.hooks.done.tap('compile-done-plugin', (stats) => {
      if (stats.hasErrors()) {
        logger.error(stats.toJson().errors);
        return;
      }

      const { host, port, path }: any = this.options;
      const url = `http://${host}:${port}${resolve('/', path)}`;

      logger.clear();
      logger.success(`编译完成！`);
      logger.log(`\n使用浏览器打开 ${chalk.cyan(url)} 访问页面。\n`);
    });
  }
}
