const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const { readdirSync, statSync } = require('fs');

const readdir = readdirSync('packages');

const ext = '*.{js,css,less}';
const tsExt = '*.{ts,tsx}';

function task(stream) {
  readdir.forEach((item) => {
    const package = `packages/${item}`;
    if (!/^\./.test(item) && statSync(package).isDirectory()) {
      stream(package).pipe(dest(`${package}/lib`));
    }
  });
}

function ts2js(cb) {
  task((package) => src(`${package}/src/**/${tsExt}`).pipe(babel()));
  cb();
}

function copy(cb) {
  task((package) => src(`${package}/src/**/${ext}`));
  cb();
}

if (process.env.NODE_ENV === 'development') {
  watch(`packages/*/src/**/${tsExt}`, ts2js);
  watch(`packages/*/src/**/${ext}`, copy);
}

exports.default = parallel(ts2js, copy);
