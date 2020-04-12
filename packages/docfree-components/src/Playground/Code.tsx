import React, { useLayoutEffect, useState, useRef, RefObject } from 'react';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import hljs from 'highlight.js';
import { Tooltip, Card } from '../antd';
import PreCode from '../PreCode';

export default function Code({ lang, content }) {
  const [copy, copyDispatch] = useState(false);
  const ref: RefObject<any> = useRef();

  const createCopyNode = () => {
    const node = document.createElement('textarea');

    node.style.position = 'fixed';
    node.style.top = '-999em';
    node.style.left = '-999em';
    node.value = content;
    document.body.append(node);
    node.select();
    document.execCommand('copy');

    return node;
  };

  const copyHandler = () => {
    const node = createCopyNode();

    copyDispatch(true);
    node.remove();
    setTimeout(() => {
      copyDispatch(false);
    }, 1000);
  };

  useLayoutEffect(() => {
    hljs.highlightBlock(ref.current);
  }, []);

  return (
    <Card
      title={lang}
      bordered={false}
      extra={
        <Tooltip placement="top" title={`复制${copy ? '成功' : '代码'}`}>
          {copy ? (
            <CheckOutlined style={{ color: 'green' }} />
          ) : (
            <CopyOutlined onClick={copyHandler} />
          )}
        </Tooltip>
      }>
      <PreCode ref={ref} lang={lang} content={content} />
    </Card>
  );
}
