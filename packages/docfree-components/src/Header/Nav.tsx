import React from 'react';
import Menus, { MenusItems } from '../Menus';
import './style.less';

export interface NavProps {
  data: MenusItems;
}

export default function Nav({ data }: NavProps) {
  const isActive = (match: any, { pathname }, { to: t }) => {
    return match || pathname.startsWith(t);
  };

  const getChildPaths = (items: MenusItems, paths: string[] = []) => {
    items.forEach(({ text, to, menus }) => {
      if (text) {
        if (to) {
          paths.push(to);
        }

        if (Array.isArray(menus)) {
          paths = paths.concat(getChildPaths(menus));
        }
      }
    });

    return paths;
  };

  const getMenus = (items: MenusItems, source: MenusItems = [], isLevel0?: boolean) => {
    items.forEach((item) => {
      const { text, to, menus, ...rest } = item;

      if (text) {
        const hasMenus = Array.isArray(menus) && menus.length;

        if (isLevel0 && !to && menus && hasMenus) {
          const childPaths = getChildPaths(menus);
          source.push({
            to: '/',
            text,
            menus: getMenus(menus),
            onClick: () => false,
            isActive: (m: any, { pathname }: any) => {
              for (const path of childPaths) {
                if (pathname.startsWith(path)) {
                  return true;
                }
              }

              return false;
            },
            ...rest,
          });
        } else if (menus && hasMenus) {
          source.push({
            ...item,
            menus: getMenus(menus),
            isActive: to ? isActive : null,
          });
        } else if (to) {
          source.push({
            ...item,
            isActive,
          });
        } else {
          source.push(item);
        }
      }
    });

    return source;
  };

  return <Menus className="docfree-nav" data={getMenus(data, [], true)} />;
}
