import { RouteItem } from './generateData';

export default function generateBlogRoutes(routes: RouteItem[] = [], pathname = '/'): RouteItem[] {
  for (const route of routes) {
    const { children, path, filename }: any = route;

    if (path === '/' && /^README$/i.test(filename)) {
      return routes;
    }

    if (Array.isArray(children)) {
      generateBlogRoutes(children, `${pathname}/${path}/`.replace(/\/+/g, '/'));
    }
  }

  routes.unshift({
    path: '/',
    pathname,
    children: 'BlogEntry',
  });

  return routes;
}
