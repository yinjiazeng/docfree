export interface ObjectAny {
  [key: string]: any;
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
  dest: string;
  nav: ConfigNav[];
  sidebar: ConfigSidebar;
  webpackConfig: ObjectAny;
  [key: string]: any;
}
