import commander from 'commander';
import pkg from 'docfree/package.json';
import init from './init';
import build from './build';
import dev from './dev';

const program = new commander.Command();

program.version(pkg.version, '-v, --version', '当前版本');

program
  .command('init [dir]')
  .description('生成基础文档目录模板')
  .action(init);

program
  .command('build <dir>')
  .description('将文档目录中所有资源打包，生成部署所需的静态资源文件')
  .action(build);

program
  .command('dev <dir>')
  .description('基于文档目录创建一个Web服务，开发时可以实时预览')
  .action(dev);

program.parse(process.argv);
