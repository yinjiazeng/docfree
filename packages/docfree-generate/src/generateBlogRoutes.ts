import { RouteItem } from './generateData';

export default function generateBlogRoutes(routes: RouteItem[] = [], pathname = '/'): RouteItem[] {
  routes.forEach((data) => {
    const { children, path } = data;

    if (Array.isArray(children)) {
      generateBlogRoutes(children, `${path}/`);
    }
  });

  for (const route of routes) {
    const { filename, path }: any = route;
    if (path === '/' && /^README$/i.test(filename)) {
      return routes;
    }
  }

  routes.unshift({
    path: '/',
    pathname,
    children: 'BlogEntry',
  });

  return routes;
}
