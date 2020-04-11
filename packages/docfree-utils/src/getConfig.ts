import { join } from 'path';
import { merge, getDocPath } from '.';
import { DocfreeConfig } from './typings';

const defaultConfig: any = {
  router: 'hash',
  mode: 'doc',
  title: '',
  footer: '',
  nav: [],
  dest: '',
  edit: {
    name: 'Github',
    path: '',
  },
  showTime: true,
  showCode: false,
  showCodeIcon: false,
  langTheme: 'github',
  sidebar: {
    depth: 3,
    pageDepth: 6,
    data: null,
  },
  plugins: [],
  webpackConfig: {},
};

export default function getConfig(): DocfreeConfig {
  const configPath = join(getDocPath(), '/.docfree/config.js');

  try {
    return merge({}, defaultConfig, require(configPath));
  } catch (e) {
    return defaultConfig;
  }
}
