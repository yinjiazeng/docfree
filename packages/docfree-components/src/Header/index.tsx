import React from 'react';
import { Row, Col } from '../antd';
import Search from './Search';
import Nav from './Nav';
import style from './style.module.less';

export default function Header({ nav, title, dataSource }: any) {
  return (
    <Row className={style.header}>
      <Col>
        <span>{title}</span>
      </Col>
      <Col flex="1">
        <Search data={dataSource} />
        <Nav data={nav} />
      </Col>
    </Row>
  );
}
