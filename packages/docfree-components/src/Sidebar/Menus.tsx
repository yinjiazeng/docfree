import React, { ReactElement } from 'react';
import { NavLink } from 'nuomi';
import HashLink from '../HashLink';

interface Menus {
  text: string;
  to?: string;
  depth?: number;
  level: number;
  menus?: Menus[];
}

export default function Menus({ data }) {
  const getMenus = (menus: Menus[], components: ReactElement[] = []) => {
    if (Array.isArray(menus) && menus.length) {
      menus.forEach((item, i) => {
        if (item.text) {
          let elem: ReactElement;
          if (item.depth) {
            elem = (
              <HashLink id={null} style={{ marginLeft: item.level * 20 }} to={item.text}>
                {item.text}
              </HashLink>
            );
          } else if (item.to) {
            elem = <NavLink to={item.to}>{item.text}</NavLink>;
          } else {
            elem = <span>{item.text}</span>;
          }

          components.push(<li key={i}>{elem}</li>);
        }
        if (item.menus) {
          const items = getMenus(item.menus);
          if (items.length) {
            components.push(<ul key={`${i}_ul`}>{items}</ul>);
          }
        }
      });
    }

    return components;
  };

  const menus = getMenus(data);
  if (menus.length) {
    return <ul>{menus}</ul>;
  }

  return null;
}
