#!/usr/bin/env node

import commander from 'commander';
import { build, server } from 'docfree-webpack';
import resolver, { watch } from 'docfree-resolver';
import pkg from '../package.json';

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
  .command('server <dir>')
  .description('启动Web服务')
  .action(() => {
    watch();
    server();
  });
