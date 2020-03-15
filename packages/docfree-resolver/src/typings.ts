export interface RouteItem {
  path: string;
  children?: Routes | string;
  require?: string;
  createTime?: number;
}

export type Routes = Array<RouteItem>;
