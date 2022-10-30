import { join } from 'path';
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
  type: 'hash' | 'browser';
  mode: 'doc' | 'blog';
  title: string;
  dest: string;
  footer: string;
  nav: DocfreeNav[];
  sidebar: DocfreeSidebar;
  pageSize: number;
  pageExtra: null | {
    platform: string;
    path: string;
    format: string;
  };
  langTheme: string;
  plugins: DocfreePlugin[];
  webpack: any;
  async: boolean;
  [key: string]: any;
}

const defaultConfig: DocfreeConfig = {
  type: 'hash',
  mode: 'doc',
  title: '',
  footer: '',
  nav: [],
  dest: '',
  pageSize: 30,
  async: false,
  pageExtra: {
    platform: 'Github',
    path: '',
    format: 'yyyy/MM/dd hh:mm:ss',
  },
  langTheme: '',
  sidebar: {
    depth: 3,
    pageDepth: 6,
    data: null,
  },
  plugins: [],
  webpack: {},
};

export default function(): DocfreeConfig {
  const configPath = join(getDocPath(), '/.docfree/config.js');

  return merge({}, defaultConfig, require(configPath));
}
