export interface RouteItem {
  path: string;
  children?: Routes | 'NotFound';
  require?: string;
}

export type Routes = Array<RouteItem>;
