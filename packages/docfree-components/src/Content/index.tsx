import React, { useLayoutEffect, useState } from 'react';
import { useConnect, useNuomi, Link } from 'nuomi';
import { EyeInvisibleOutlined, EyeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import hljs from 'highlight.js';
import { Tooltip, Row, Col } from '../antd';
import './style.less';

function Content({ children, showIcon, showTime, showEdit }) {
  const [{ showCode, listSource }, dispatch] = useConnect();
  const { nuomiProps } = useNuomi();
  const [prevNextData, prevNextDispatch]: [{ to: string; text: string }[], any] = useState([]);
  const Icon = showCode ? EyeInvisibleOutlined : EyeOutlined;

  const showCodeHandler = () => {
    dispatch({
      type: '_updateState',
      payload: {
        showCode: !showCode,
      },
    });
  };

  const getEditUrl = () => {
    let { path } = showEdit;

    if (typeof path === 'string' && path) {
      const { ext, filename, pathname } = nuomiProps;
      path = path.replace(/\/+$/, '');

      return path + pathname + filename + ext;
    }

    return undefined;
  };

  useLayoutEffect(() => {
    dispatch({ type: 'initData' });

    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  useLayoutEffect(() => {
    const findIndex = listSource.findIndex(({ text }) => nuomiProps.title === text);

    if (findIndex !== -1) {
      prevNextDispatch([listSource[findIndex - 1], listSource[findIndex + 1]]);
    }
  }, [listSource]);

  return (
    <div className="docfree-content">
      {children}
      {showIcon && (
        <div className="docfree-content-tools">
          <Tooltip placement="top" title={`${showCode ? '隐藏' : '显示'}全部代码`}>
            <Icon onClick={showCodeHandler} />
          </Tooltip>
        </div>
      )}
      {(showTime || !!showEdit) && (
        <Row justify="space-between" className="docfree-content-extra">
          <Col>
            {!!showEdit && (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={getEditUrl()} target="_blank">
                在{showEdit.name}上编辑此文件
              </a>
            )}
          </Col>
          <Col>{showTime && <>最后更新时间：{nuomiProps.updateDate}</>}</Col>
        </Row>
      )}
      {(!!prevNextData[0] || !!prevNextData[1]) && (
        <Row justify="space-between" className="docfree-next-prev">
          <Col>
            {!!prevNextData[0] && (
              <Link to={prevNextData[0].to}>
                <LeftOutlined />
                {prevNextData[0].text}
              </Link>
            )}
          </Col>
          <Col>
            {!!prevNextData[1] && (
              <Link to={prevNextData[1].to}>
                {prevNextData[1].text}
                <RightOutlined />
              </Link>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Content;
