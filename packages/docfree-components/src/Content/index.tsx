import React, { useLayoutEffect, useState } from 'react';
import { useConnect, useNuomi, Link } from 'nuomi';
import { EyeInvisibleOutlined, EyeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import hljs from 'highlight.js';
import { Tooltip } from '../antd';

function Content({ children, showIcon, showTime }) {
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
    <div>
      {showIcon && (
        <Tooltip placement="top" title={`${showCode ? '隐藏' : '显示'}全部代码`}>
          <Icon onClick={showCodeHandler} />
        </Tooltip>
      )}
      {children}
      {showTime && <div>最后更新时间：{new Date(nuomiProps.createTime).toString()}</div>}
      {(!!prevNextData[0] || !!prevNextData[1]) && (
        <div>
          {!!prevNextData[0] && (
            <Link to={prevNextData[0].to}>
              <LeftOutlined />
              {prevNextData[0].text}
            </Link>
          )}
          {!!prevNextData[1] && (
            <Link to={prevNextData[1].to}>
              {prevNextData[1].text}
              <RightOutlined />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Content;
