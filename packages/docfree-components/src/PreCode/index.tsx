import React from 'react';

function PreCode({ lang, content, forwardRef }: any) {
  return (
    <pre style={{ margin: 0 }}>
      <code ref={forwardRef} className={`languge-${lang}`}>
        {content}
      </code>
    </pre>
  );
}

export default React.forwardRef((props: any, ref) => <PreCode {...props} forwardRef={ref} />);
