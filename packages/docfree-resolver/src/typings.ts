export interface RouteItem {
  path: string;
  children?: Routes | string;
  require?: string;
  title?: string;
  filename?: string;
  createTime?: number;
}

export type Routes = Array<RouteItem>;
