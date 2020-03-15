export interface RouteItem {
  path: string;
  children?: Routes | string;
  require?: string;
  title?: string;
  baseName?: string;
  fileName?: string;
  createTime?: number;
}

export type Routes = Array<RouteItem>;
