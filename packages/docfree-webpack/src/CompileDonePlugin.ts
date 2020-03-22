export default class CompileDonePlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.done.tap('compile-done-plugin', (stats) => {
      // process.stdout.write('');
    });
  }
}
