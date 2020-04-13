import { Compiler } from 'webpack';
import { resolve } from 'path';
import { logger, chalk, ObjectAny } from 'docfree-utils';

export default class CompileDonePlugin {
  options = {};

  constructor(options: ObjectAny) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.invalid.tap('invalid', () => {
      logger.clear();
    });

    compiler.hooks.done.tap('done', (stats) => {
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
