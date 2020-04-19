import React from 'react';
import { useConnect, Icon } from '../components';
import Menus from '../Menus';
import Drawer from '../Drawer';
import './style.less';

export default function Sidebar() {
  const [
    { showSidebar, showPageSidebar, sidebarMenus, sidebarTitle, pageSidebarMenus },
  ] = useConnect();

  return (
    <>
      {showSidebar && (
        <div className="docfree-sidebar">
          <Drawer icon={<Icon type="menu-unfold" />} dir="left">
            {!!sidebarTitle && <strong>{sidebarTitle}</strong>}
            <Menus data={sidebarMenus} />
          </Drawer>
        </div>
      )}
      {showPageSidebar && (
        <div className="docfree-page-sidebar">
          <Menus data={pageSidebarMenus} />
        </div>
      )}
    </>
  );
}
