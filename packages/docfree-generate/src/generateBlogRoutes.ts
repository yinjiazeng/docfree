import { RouteItem } from './generateData';

export default function generateBlogRoutes(routes: RouteItem[] = [], pathname = '/'): RouteItem[] {
  routes.forEach((data) => {
    const { children, path } = data;

    if (Array.isArray(children)) {
      generateBlogRoutes(children, `${path}/`);
    }
  });

  routes.unshift({
    path: '/',
    pathname,
    children: 'BlogEntry',
  });

  return routes;
}
