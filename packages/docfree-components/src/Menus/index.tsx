import React, { ReactElement } from 'react';
import { NavLink } from '../components';
import AnchorLink from '../AnchorLink';
import './style.less';

export interface MenusData {
  text?: string;
  to?: string;
  depth?: number;
  level?: number;
  menus?: MenusData[];
  [key: string]: any;
}

export type MenusItems = MenusData[];

export interface MenusProps {
  data: MenusItems;
  className?: string;
}

export default function Menus({ data, className }: MenusProps) {
  const getMenus = (menus: MenusItems, list: ReactElement[] = []) => {
    if (Array.isArray(menus) && menus.length) {
      menus.forEach(({ depth, level, text, to, menus: m, isActive, ...rest }, i) => {
        if (text) {
          let elem: ReactElement;

          if (level !== undefined) {
            elem = (
              <AnchorLink id={null} to={text} {...rest} style={{ paddingLeft: level * 12 }}>
                {text}
              </AnchorLink>
            );
          } else if (to) {
            if (/^(https?:)?\/\//.test(to)) {
              elem = (
                <a href={to} target="_blank" {...rest}>
                  {text}
                </a>
              );
            } else {
              elem = (
                <NavLink to={to} isActive={isActive} {...rest}>
                  {text}
                </NavLink>
              );
            }
          } else {
            elem = <b>{text}</b>;
          }
          if (m) {
            const items = getMenus(m);

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
    return <ul className={`docfree-menus${className ? ` ${className}` : ''}`}>{menus}</ul>;
  }

  return null;
}
