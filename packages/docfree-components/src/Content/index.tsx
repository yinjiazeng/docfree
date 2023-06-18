import React, { useLayoutEffect, useState } from 'react';
import format from 'date-format';
import { useConnect, Link, hljs, Row, Col, Icon } from '../components';
import './style.less';

function Content({ children, pageExtra }) {
  const [{ listSource, pathname, filename, ext, title, utime }, dispatch] = useConnect();
  const [prevNextData, prevNextDispatch]: [{ to: string; text: string }[], any] = useState([]);

  const getEditUrl = () => {
    let { path } = pageExtra;

    if (typeof path === 'string' && path) {
      path = path.replace(/\/+$/, '');

      return path + pathname + filename + ext;
    }

    return undefined;
  };

  useLayoutEffect(() => {
    dispatch('initData');

    const codes = document.querySelectorAll('pre code');

    [].forEach.call(codes, (node) => {
      hljs.highlightBlock(node);
    });
  }, []);

  useLayoutEffect(() => {
    const findIndex = listSource.findIndex(({ text }) => title === text);

    if (findIndex !== -1) {
      prevNextDispatch([listSource[findIndex - 1], listSource[findIndex + 1]]);
    }
  }, [listSource]);

  return (
    <div className="docfree-content">
      {children}
      {!!pageExtra && (
        <Row type="flex" justify="space-between" className="docfree-content-extra">
          <Col>
            <a href={getEditUrl()} target="_blank">
              在{pageExtra.platform}上编辑此文件
            </a>
          </Col>
          <Col>更新时间：{format(pageExtra.format, new Date(utime))}</Col>
        </Row>
      )}
      {(!!prevNextData[0] || !!prevNextData[1]) && (
        <Row type="flex" justify="space-between" className="docfree-next-prev">
          <Col>
            {!!prevNextData[0] && (
              <Link to={prevNextData[0].to}>
                <Icon type="left" />
                {prevNextData[0].text}
              </Link>
            )}
          </Col>
          <Col>
            {!!prevNextData[1] && (
              <Link to={prevNextData[1].to}>
                {prevNextData[1].text}
                <Icon type="right" />
              </Link>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Content;
