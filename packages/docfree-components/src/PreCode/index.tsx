import React from 'react';

function PreCode({ lang, content, forwardRef }) {
  return (
    <pre>
      <code ref={forwardRef} className={`languge-${lang}`}>
        {content}
      </code>
    </pre>
  );
}

export default React.forwardRef((props, ref) => <PreCode {...props} forwardRef={ref} />);
