#!/usr/bin/env node

import commander from 'commander';
import { tempPath } from 'docfree-utils';
import { build, server } from 'docfree-webpack';
import { generate, generateWatch } from 'docfree-generate';
import pkg from 'docfree/package.json';

const program = new commander.Command();

program.version(pkg.version, '-v, --version', '当前版本');

program
  .command('build <dir>')
  .description('将文档目录中所有资源打包，生成部署所需的静态资源文件')
  .action(() => {
    process.env.NODE_ENV = 'production';
    tempPath.remove();
    generate();
    build();
  });

program
  .command('dev <dir>')
  .description('基于文档目录创建一个Web服务，开发时可以实时预览')
  .action(async () => {
    process.env.NODE_ENV = 'development';
    tempPath.remove();
    await generateWatch();
    server();
  });

program
  .command('init <dir>')
  .description('生成基础文档目录')
  .action(async () => {});

program.parse(process.argv);
