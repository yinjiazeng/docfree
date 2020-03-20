#!/usr/bin/env node
// a
import commander from 'commander';
import { build, dev } from 'docfree-webpack';
import { resolver, resolverWatch } from 'docfree-resolver';
import pkg from 'docfree/package.json';

const program = new commander.Command();

program.version(pkg.version, '-h, --version', '当前版本');

program
  .command('build <dir>')
  .description('构建生成本地静态资源')
  .action(() => {
    resolver();
    build();
  });

program
  .command('dev <dir>')
  .description('启动Web服务')
  .action(() => {
    resolverWatch();
    dev();
  });
