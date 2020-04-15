import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Row, Col, Link } from '../components';
import Search from './Search';
import Nav from './Nav';
import Drawer from '../Drawer';
import './style.less';

export default function Header({ title, dataSource, type, nav }) {
  return (
    <Row className="docfree-header" justify="space-between">
      <Col className="docfree-header-left-col" />
      <Col>
        <Link to="/" className="docfree-logo">
          {title}
        </Link>
      </Col>
      <Col className="docfree-header-right-col">
        <Drawer icon={<UnorderedListOutlined />}>
          <Search data={dataSource} type={type} />
          <Nav data={nav} />
        </Drawer>
      </Col>
    </Row>
  );
}
