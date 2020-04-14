import React, { useEffect, useState, useRef, RefObject } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useConnect } from '../components';
import Code from './Code';
import './style.less';

export default function Playground({ code, render, children }) {
  const ref: RefObject<any> = useRef();
  const [{ showCode }] = useConnect();
  const [component, componentDispatch] = useState(children);
  const [show, showDispatch] = useState(false);

  const showHandler = () => {
    showDispatch(!show);
  };

  useEffect(() => {
    if (render) {
      componentDispatch(render(ref.current));
    }
  }, []);

  useEffect(() => {
    showDispatch(showCode);
  }, [showCode]);

  return (
    <div className="docfree-playground">
      <div>
        <div ref={ref}>{component}</div>
      </div>
      <a onClick={showHandler}>
        {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        {show ? '隐藏' : '显示'}代码
      </a>
      {show && [].concat(code).map((item, i) => <Code {...item} key={i} />)}
    </div>
  );
}
