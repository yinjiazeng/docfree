import { join, resolve } from 'path';
import { readdirSync, writeFileSync } from 'fs';
import { getDocPath, fsExtra, logger, formatJSON, inquirer, ObjectAny } from 'docfree-utils';

export default async function(name: string) {
  let docsPath = getDocPath();

  if (!name) {
    const result = await inquirer.prompt({
      type: 'confirm',
      name: 'docs',
      message: '未设置目录名，是否新建docs作为文档目录',
    });

    if (!result.docs) {
      return;
    }

    name = 'docs';
    docsPath = join(docsPath, 'docs');
  }

  if (fsExtra.pathExistsSync(docsPath) && readdirSync(docsPath).length) {
    const result = await inquirer.prompt({
      type: 'confirm',
      name: 'cover',
      message: '当前目录不为空，在此目录生成模板会覆盖已有文件，是否继续？',
    });

    if (!result.cover) {
      return;
    }
  }

  const templateDir = resolve(require.resolve('docfree-template'), '../docs');

  readdirSync(templateDir).forEach((item) => {
    fsExtra.copySync(join(templateDir, item), join(docsPath, item));
  });

  let devCommand = `docfree dev ${name}`;
  let buildCommand = `docfree build ${name}`;
  const cwd = process.cwd();
  const pkgPath = join(cwd, 'package.json');

  if (fsExtra.pathExistsSync(pkgPath)) {
    const yarnLockPath = join(cwd, 'yarn.lock');
    const scriptCommand = fsExtra.pathExistsSync(yarnLockPath) ? 'yarn' : 'npm run';
    let pkg: ObjectAny = {};

    try {
      pkg = require(pkgPath);
    } catch (e) {
      //
    }

    if (!pkg.scripts) {
      pkg.scripts = {};
    }

    pkg.scripts['doc:dev'] = devCommand;
    pkg.scripts['doc:build'] = buildCommand;

    devCommand = `${scriptCommand} doc:dev`;
    buildCommand = `${scriptCommand} doc:build`;

    writeFileSync(pkgPath, formatJSON(pkg));
  }

  logger.log('\n创建文档模板成功！');

  logger.log('\n启动项目');
  logger.shell(`${devCommand}`);

  logger.log('\n打包项目');
  logger.shell(`${buildCommand}`);

  logger.log();
}
