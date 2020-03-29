import { Configuration } from 'webpack';

export interface ConfigMeta {
  [key: string]: string;
}

export interface ConfigNav {
  to: string;
  text: string;
  menus?: ConfigNav[];
}

export interface ConfigSidebarData {
  [path: string]: {
    title?: string;
    list?: string[];
  };
}

export interface ConfigSidebar {
  show: boolean;
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  data: ConfigSidebarData | null;
}

export interface DocfreeConfig {
  mode: 'doc' | 'blog';
  title: string;
  favicon: string;
  dest: string;
  meta: ConfigMeta;
  nav: ConfigNav[];
  sidebar: ConfigSidebar;
  webpackConfig: Configuration;
  [key: string]: any;
}
