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

export const Playground = ({ code, styles, render, children }) => {
  return (
    <>
      <code lang={code.lang}>{code.content}</code>
      {styles.map(({ lang, content }, i) => (
        <code lang={lang} key={i}>
          {content}
        </code>
      ))}
      {render ? render() : children}
    </>
  );
};
