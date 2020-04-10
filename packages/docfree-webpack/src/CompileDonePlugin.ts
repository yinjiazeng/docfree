import { Compiler } from 'webpack';

export default class CompileDonePlugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap('compile-done-plugin', (stats) => {
      process.stdout.write('');
    });
  }
}
