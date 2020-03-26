import React, { useEffect, useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useConnect } from 'nuomi';
import Code from './Code';

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
    <div>
      <div>{component}</div>
      <div onClick={showHandler}>
        {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        {show ? '隐藏' : '显示'}代码
      </div>
      {show && [].concat(code).map((item, i) => <Code {...item} key={i} />)}
    </div>
  );
}
