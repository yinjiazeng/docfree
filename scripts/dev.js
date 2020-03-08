const { execSync } = require('child_process');
const pkg = require('../package.json');

execSync(`${pkg.scripts.babel} --watch`);
