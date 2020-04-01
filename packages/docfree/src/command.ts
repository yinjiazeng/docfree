#!/usr/bin/env node

import commander from 'commander';
import { tempPath } from 'docfree-utils';
import { build, server } from 'docfree-webpack';
import { resolver, resolverWatch } from 'docfree-resolver';
import pkg from 'docfree/package.json';

const program = new commander.Command();

program.version(pkg.version, '-v, --version', '当前版本');

program
  .command('build <dir>')
  .description('构建生成本地静态资源')
  .action(() => {
    process.env.NODE_ENV = 'production';
    tempPath.remove();
    resolver();
    build();
  });

program
  .command('dev <dir>')
  .description('启动Web服务')
  .action(async () => {
    process.env.NODE_ENV = 'development';
    tempPath.remove();
    await resolverWatch();
    server();
  });

program.parse(process.argv);
