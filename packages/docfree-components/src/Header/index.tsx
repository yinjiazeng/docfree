import React from 'react';
import { Row, Col } from '../antd';
import Search from './Search';
import Menus from '../Menus';
import './style.less';

export default function Header({ nav, title, dataSource }: any) {
  return (
    <Row className="docfree-header">
      <Col>
        <span>{title}</span>
      </Col>
      <Col flex="1">
        <Menus data={nav} />
        <Search data={dataSource} />
      </Col>
    </Row>
  );
}
