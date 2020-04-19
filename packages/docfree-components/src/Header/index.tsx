import React from 'react';
import { Link, Icon } from '../components';
import Search from './Search';
import Nav from './Nav';
import Drawer from '../Drawer';
import './style.less';

export default function Header({ title, dataSource, type, nav }) {
  return (
    <div className="docfree-header">
      <div>
        <Drawer icon={<Icon type="unordered-list" />}>
          <Search data={dataSource} type={type} />
          <Nav data={nav} />
        </Drawer>
      </div>
      <div>
        <Link to="/" className="docfree-logo">
          {title}
        </Link>
      </div>
    </div>
  );
}
