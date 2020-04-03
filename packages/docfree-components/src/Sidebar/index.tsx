import React from 'react';
import { useConnect } from 'nuomi';
import Menus from '../Menus';
import './style.less';

export default function Sidebar() {
  const [
    { showSidebar, showPageSidebar, sidebarMenus, sidebarTitle, pageSidebarMenus },
  ] = useConnect();

  return (
    <>
      {!!showSidebar && !!sidebarMenus.length && (
        <div className="docfree-sidebar">
          {!!sidebarTitle && <strong>{sidebarTitle}</strong>}
          <Menus data={sidebarMenus} />
        </div>
      )}
      {!!showPageSidebar && !!pageSidebarMenus.length && (
        <div className="docfree-page-sidebar">
          <Menus data={pageSidebarMenus} />
        </div>
      )}
    </>
  );
}
