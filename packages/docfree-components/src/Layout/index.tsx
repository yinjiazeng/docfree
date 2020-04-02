import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './style.less';

export default function Layout({ children, footer, ...rest }) {
  return (
    <div className="docfree-layout">
      <Header {...rest} />
      <Sidebar />
      <section>
        {children}
        <Footer content={footer} />
      </section>
    </div>
  );
}
