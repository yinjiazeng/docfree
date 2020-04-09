import { Routes } from './typings';

export default function createBlogRouteEntry(routes: Routes): Routes {
  routes.forEach((data) => {
    const { children } = data;

    if (Array.isArray(children)) {
      createBlogRouteEntry(children);
    }
  });

  routes.unshift({
    path: '/',
    children: 'BlogEntry',
  });

  return routes;
}
