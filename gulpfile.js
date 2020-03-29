const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const { readdirSync } = require('fs');

const readdir = readdirSync('packages');

function task(stream) {
  readdir.forEach((item) => {
    if (item.startsWith('docfree')) {
      const package = `packages/${item}`;
      stream(package).pipe(dest(`${package}/lib`));

      src(`${package}/src/**/*.{ts,tsx}`).pipe(babel());
      src(`${package}/src/**/*.less`).pipe(dest(`${package}/lib`));
    }
  });
}

function ts2js(cb) {
  task((package) => src(`${package}/src/**/*.{ts,tsx}`).pipe(babel()));
  cb();
}

function copy(cb) {
  task((package) => src(`${package}/src/**/*.less`));
  cb();
}

if (process.env.NODE_ENV === 'development') {
  watch('packages/*/src/**/*.{ts,tsx}', ts2js);
  watch('packages/*/src/**/*.less', copy);
}

exports.default = parallel(ts2js, copy);
