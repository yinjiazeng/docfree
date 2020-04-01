import React from 'react';
import { useConnect } from 'nuomi';
import Menus from './Menus';
import style from './style.module.less';

export default function Sidebar() {
  const [
    { showSidebar, showPageSidebar, sidebarMenus, sidebarTitle, pageSidebarMenus },
  ] = useConnect();

  return (
    <>
      {!!showSidebar && (
        <div className={style.sidebar}>
          {!!sidebarTitle && <strong>{sidebarTitle}</strong>}
          <Menus data={sidebarMenus} />
        </div>
      )}
      {!!showPageSidebar && (
        <div className={style.pageSidebar}>
          <Menus data={pageSidebarMenus} />
        </div>
      )}
    </>
  );
}
