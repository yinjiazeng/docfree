import React from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useConnect } from '../components';
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
          <Drawer icon={<MenuUnfoldOutlined />} dir="left">
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
