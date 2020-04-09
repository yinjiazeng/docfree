export interface RouteItem {
  path: string;
  children?: Routes | string;
  require?: string;
  title?: string;
  filename?: string;
  createTime?: number;
  updateTime?: number;
  [key: string]: any;
}

export type Routes = Array<RouteItem>;
