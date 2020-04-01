import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import style from './style.module.less';

export default function Layout({ children, footer, ...rest }) {
  return (
    <div className={style.layout}>
      <Header {...rest} />
      <Sidebar />
      <section>
        {children}
        <Footer content={footer} />
      </section>
    </div>
  );
}
