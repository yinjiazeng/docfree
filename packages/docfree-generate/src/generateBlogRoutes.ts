import { Route } from './generateData';

export default function generateBlogRoutes(routes: Route[] = []): Route[] {
  routes.forEach((data) => {
    const { children } = data;

    if (Array.isArray(children)) {
      generateBlogRoutes(children);
    }
  });

  routes.unshift({
    path: '/',
    pathname: routes[0].pathname,
    children: 'BlogEntry',
  });

  return routes;
}