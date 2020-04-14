import React from 'react';
import { Row, Col, Link } from '../components';
import Search from './Search';
import Nav from './Nav';
import './style.less';

export default function Header({ type, nav, title, dataSource }: any) {
  const isActive = (match: any, { pathname }, { to }) => {
    return match || pathname.startsWith(to);
  };

  return (
    <Row className="docfree-header" justify="space-between">
      <Col>
        <Link to="/" className="docfree-logo">
          {title}
        </Link>
      </Col>
      <Col>
        <Search data={dataSource} type={type} />
        <Nav data={nav} />
      </Col>
    </Row>
  );
}
