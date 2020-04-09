import inquirer from 'inquirer';
import { join, dirname } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { getDocPath, fsExtra, logger, formatJSON, chalk, ObjectAny } from 'docfree-utils';

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

  const templateDir = join(dirname(require.resolve('docfree-template')), 'docs');

  readdirSync(templateDir).forEach((item) => {
    fsExtra.copySync(join(templateDir, item), join(docsPath, item));
  });

  let devCommand = `docfree dev ${name}`;
  let buildCommand = `docfree build ${name}`;
  const cwd = process.cwd();
  const pkgPath = join(cwd, 'package.json');

  if (fsExtra.pathExistsSync(pkgPath)) {
    const gitignorePath = join(cwd, '.gitignore');
    const yarnLockPath = join(cwd, 'yarn.lock');
    const scriptCommand = fsExtra.pathExistsSync(yarnLockPath) ? 'yarn' : 'npm run';
    let pkg: ObjectAny = {};

    if (fsExtra.pathExistsSync(gitignorePath)) {
      const gitignoreContent = readFileSync(gitignorePath).toString();

      if (gitignoreContent.indexOf('**/.docfree/.temp') === -1) {
        writeFileSync(
          gitignorePath,
          `${gitignoreContent}\n# docfree临时文件目录\n**/.docfree/.temp`,
        );
      }
    }

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

  logger.log(`

  创建文档模板成功！

  启动项目
  ${chalk.gray('$')} ${chalk.cyan(`${devCommand} ${name}`)}

  打包项目
  ${chalk.gray('$')} ${chalk.cyan(`${buildCommand} ${name}`)}

  `);
}
