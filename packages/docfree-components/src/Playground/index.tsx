import React, { useEffect, useState } from 'react';
import { useConnect, Icon } from '../components';
import Code from './Code';
import Component from '../Component';
import './style.less';

export default function Playground({ code, render, children }) {
  const [{ showCode }] = useConnect();
  const [show, showDispatch] = useState(false);

  const showHandler = () => {
    showDispatch(!show);
  };

  useEffect(() => {
    showDispatch(showCode);
  }, [showCode]);

  return (
    <div className="docfree-playground">
      <div>
        <Component render={render}>{children}</Component>
      </div>
      <a onClick={showHandler}>
        {show ? <Icon type="eye-invisible" /> : <Icon type="eye" />}
        {show ? '隐藏' : '显示'}代码
      </a>
      {show && [].concat(code).map((item: any, i) => <Code {...item} key={i} />)}
    </div>
  );
}
