import { RouteItem } from './generateData';

export default function generateBlogRoutes(routes: RouteItem[] = [], pathname = '/'): RouteItem[] {
  for (const route of routes) {
    const { children, path, extends: exts }: any = route;

    if (path === '/' && exts && exts.length && /^README$/i.test(exts[0].state.filename)) {
      return routes;
    }

    if (Array.isArray(children)) {
      generateBlogRoutes(children, `${pathname}/${path}/`.replace(/\/+/g, '/'));
    }
  }

  routes.unshift({
    path: '/',
    extends: [
      {
        state: {
          pathname,
        },
      },
    ],
    children: 'BlogEntry',
  });

  return routes;
}
