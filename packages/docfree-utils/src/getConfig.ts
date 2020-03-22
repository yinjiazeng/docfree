import { join } from 'path';
import merge from 'lodash.merge';
import getDocPath from './getDocPath';
import { DocfreeConfig } from './typings';

const defaultConfig: DocfreeConfig = {
  mode: 'doc',
  title: '',
  favicon: '',
  logo: '',
  dest: '',
  meta: {},
  nav: [],
  sidebar: {
    show: true,
    depth: 3,
    data: null,
  },
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
