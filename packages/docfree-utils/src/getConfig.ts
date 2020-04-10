import { join } from 'path';
import { merge, getDocPath } from '.';
import { DocfreeConfig } from './typings';

const defaultConfig: DocfreeConfig = {
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
    show: true,
    depth: 3,
    data: null,
  },
  pageSidebar: {
    show: true,
    depth: 6,
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
