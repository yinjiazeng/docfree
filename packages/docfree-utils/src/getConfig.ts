import { join } from 'path';
import merge from 'lodash.merge';
import getDocPath from './getDocPath';
import { DocfreeConfig } from './typings';

const defaultConfig: DocfreeConfig = {
  title: '',
  favicon: '',
  meta: {},
  nav: [],
  sidebar: {
    show: true,
    depth: 3,
    data: {},
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
