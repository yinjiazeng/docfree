import React, { ReactElement } from 'react';
import { NavLink } from 'nuomi';
import AnchorLink from '../AnchorLink';
import './style.less';

interface Menus {
  text: string;
  to?: string;
  depth?: number;
  level: number;
  menus?: Menus[];
}

interface MenusProps {
  data: Menus[];
  className?: string;
  isActive?: Function;
}

export default function Menus({ data, isActive, className }: MenusProps) {
  const getMenus = (menus: Menus[], list: ReactElement[] = []) => {
    if (Array.isArray(menus) && menus.length) {
      menus.forEach((item, i) => {
        if (item.text) {
          let elem: ReactElement;

          if (item.level !== undefined) {
            elem = (
              <AnchorLink id={null} style={{ paddingLeft: item.level * 16 }} to={item.text}>
                {item.text}
              </AnchorLink>
            );
          } else if (item.to) {
            if (/^(https?:)?\/\//.test(item.to)) {
              elem = (
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
            elem = <b>{item.text}</b>;
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
    return <ul className={`docfree-menus${className ? ` ${className}` : ''}`}>{menus}</ul>;
  }

  return null;
}
