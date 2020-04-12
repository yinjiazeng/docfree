import { join } from 'path';
import { Configuration } from 'webpack';
import { merge, getDocPath } from '.';

export type DocfreeSidebarDepth = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DocfreeNav {
  text: string;
  to?: string;
  menus?: DocfreeNav[];
}

export interface DocfreeSidebarData {
  [path: string]: {
    title: string;
    menus?: string[];
  };
}

export interface DocfreeSidebar {
  depth?: DocfreeSidebarDepth;
  pageDepth?: DocfreeSidebarDepth;
  data?: DocfreeSidebarData | null;
}

export type DocfreePlugin = string | Function;

export interface DocfreeConfig {
  router: 'hash' | 'browser';
  mode: 'doc' | 'blog';
  title: string;
  dest: string;
  footer: string;
  nav: DocfreeNav[];
  sidebar: DocfreeSidebar;
  pageSize: number;
  pageExtra: null | {
    platform: string;
    platformPath: string;
    format: string;
  };
  langTheme: string;
  plugins: DocfreePlugin[];
  webpackConfig: Configuration;
  [key: string]: any;
}

const defaultConfig: DocfreeConfig = {
  router: 'hash',
  mode: 'doc',
  title: '',
  footer: '',
  nav: [],
  dest: '',
  pageSize: 20,
  pageExtra: {
    platform: 'Github',
    platformPath: '',
    format: 'yyyy/MM/dd hh:mm:ss',
  },
  langTheme: 'github',
  sidebar: {
    depth: 3,
    pageDepth: 0,
    data: null,
  },
  plugins: [],
  webpackConfig: {},
};

export default function(): DocfreeConfig {
  const configPath = join(getDocPath(), '/.docfree/config.js');

  try {
    return merge({}, defaultConfig, require(configPath));
  } catch (e) {
    return defaultConfig;
  }
}
