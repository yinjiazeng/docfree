import React, { useLayoutEffect } from 'react';
import { useConnect } from 'nuomi';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import hljs from 'highlight.js';
import { Tooltip } from '../antd';

function Content({ children, showIcon }) {
  const [{ showCode: show }, dispatch] = useConnect(({ showCode }) => ({ showCode }));
  const Icon = show ? EyeInvisibleOutlined : EyeOutlined;

  const showCodeHandler = () => {
    dispatch({
      type: '_updateState',
      payload: {
        showCode: !show,
      },
    });
  };

  useLayoutEffect(() => {
    dispatch({ type: 'initData' });

    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return (
    <>
      {showIcon && (
        <Tooltip placement="top" title={`${show ? '隐藏' : '显示'}全部代码`}>
          <Icon onClick={showCodeHandler} />
        </Tooltip>
      )}
      {children}
    </>
  );
}

export default Content;
