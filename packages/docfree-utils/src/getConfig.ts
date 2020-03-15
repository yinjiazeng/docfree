import { join } from 'path';
import getDocPath from './getDocPath';

const defaultConfig = {
  // title: '',
  // description: '',
  // head: [['', {}]],
  // webpackConfig: {},
  // navLink: [
  //   {
  //     to: '',
  //     text: '',
  //     menus: [
  //       {
  //         to: '',
  //         text: '',
  //       },
  //     ],
  //   },
  // ],
  // sidebar: {
  //   show: true,
  //   depth: 3,
  //   data: {
  //     '/api': {
  //       title: '',
  //       menus: [],
  //     },
  //   },
  // },
  // subSidebar: {
  //   depth: 3,
  //   show: true,
  // },
};

export default function getConfig() {
  const configPath = join(getDocPath(), '/.docfree/config.js');
  try {
    return { ...defaultConfig, ...require(configPath) };
  } catch (e) {
    return defaultConfig;
  }
}
