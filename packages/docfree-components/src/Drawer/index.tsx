import React, { useState, useEffect } from 'react';
import { router } from '../components';
import './style.less';

export default function Drawer({ icon, dir = 'right', children }) {
  const [display, displayDispatch]: any = useState(null);
  const [visible, visibleDispatch]: any = useState(null);
  let style: any = null;
  let animete = '';

  const show = () => {
    displayDispatch('block');
    visibleDispatch('show');
  };

  const hide = () => {
    visibleDispatch('hide');
    setTimeout(() => {
      displayDispatch(null);
    }, 100);
  };

  useEffect(() => {
    const unListener = router.listener((location: any, isInit: boolean) => {
      if (!isInit && display) {
        hide();
      }
    });
    return () => {
      unListener();
    };
  }, [display]);

  useEffect(() => {
    const resize = () => {
      if (window.outerWidth > 800 && display !== null) {
        displayDispatch(null);
      }
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (display !== null) {
    style = { display };
    animete = `docfree-animate-${visible}-${dir}`;
  }

  return (
    <>
      <a className="docfree-drawer-icon" onClick={show}>
        {icon}
      </a>
      <span className="docfree-drawer-background" style={style} onClick={hide} />
      <div className={animete} style={style}>
        {children}
      </div>
    </>
  );
}
