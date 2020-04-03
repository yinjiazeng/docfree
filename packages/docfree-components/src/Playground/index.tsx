import React, { useEffect, useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useConnect } from 'nuomi';
import Code from './Code';
import './style.less';

export default function Playground({ code, render, children }) {
  const component = render ? render() : children;
  const [{ showCode }, dispatch]: any = useConnect();
  const [show, showDispatch] = useState(false);

  const showHandler = () => {
    showDispatch(!show);
  };

  useEffect(() => {
    showDispatch(showCode);
  }, [showCode]);

  return (
    <div className="docfree-playground">
      <div>{component}</div>
      <a onClick={showHandler}>
        {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        {show ? '隐藏' : '显示'}代码
      </a>
      {show && [].concat(code).map((item, i) => <Code {...item} key={i} />)}
    </div>
  );
}
