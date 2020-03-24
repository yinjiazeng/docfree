import React from 'react';

export const Layout = ({ children }) => {
  return <>{children}</>;
};

export const HashLink = () => {
  return <></>;
};

export const NotFound = () => {
  return <></>;
};

export const BlogEntry = () => {
  return <></>;
};

export const GlobalLayout = ({ children }) => {
  return <>{children}</>;
};

export const Playground = ({ code, render, children }) => {
  return (
    <>
      {render ? render() : children}
      {[].concat(code).map(({ lang, content }, i) => (
        <code lang={lang} key={i}>
          {content}
        </code>
      ))}
    </>
  );
};
