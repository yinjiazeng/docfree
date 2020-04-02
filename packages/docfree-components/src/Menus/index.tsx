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

interface MenusProps {
  data: Menus[];
  isActive?: Function;
}

export default function Menus({ data, isActive }: MenusProps) {
  const getMenus = (menus: Menus[], list: ReactElement[] = []) => {
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
            if (/^(https?:)?\/\//.test(item.to)) {
              elem = (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={item.to} target="_blank">
                  {item.text}
                </a>
              );
            } else {
              elem = (
                <NavLink to={item.to} isActive={isActive}>
                  {item.text}
                </NavLink>
              );
            }
          } else {
            elem = <span>{item.text}</span>;
          }
          if (item.menus) {
            const items = getMenus(item.menus);
            if (items.length) {
              elem = (
                <>
                  {elem}
                  <ul>{items}</ul>
                </>
              );
            }
          }
          list.push(<li key={i}>{elem}</li>);
        }
      });
    }

    return list;
  };

  const menus = getMenus(data);
  if (menus.length) {
    return <ul>{menus}</ul>;
  }

  return null;
}
