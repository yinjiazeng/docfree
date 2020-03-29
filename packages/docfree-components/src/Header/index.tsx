import React from 'react';
import { Row, Col } from '../antd';
import Search from './Search';
import Nav from './Nav';

export default function Header({ nav, title, dataSource }: any) {
  return (
    <Row>
      <Col>
        <span>{title}</span>
      </Col>
      <Col>
        <Search data={dataSource} />
        <Nav data={nav} />
      </Col>
    </Row>
  );
}
