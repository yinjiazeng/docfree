export interface RouteItem {
  path: string;
  children?: Routes | string;
  require?: string;
  title?: string;
  filename?: string;
  createTime?: number;
  updateTime?: number;
}

export type Routes = Array<RouteItem>;
