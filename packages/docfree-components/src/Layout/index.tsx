import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { BackTop } from '../components';
import './style.less';

export default function Layout({ children, footer, ...rest }: any) {
  return (
    <div className="docfree-layout">
      <BackTop />
      <Header {...rest} />
      <Sidebar />
      <section>
        {children}
        <Footer content={footer} />
      </section>
    </div>
  );
}
