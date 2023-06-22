import React, { useRef, useState, useEffect, RefObject } from 'react';
import { useNuomi } from '../components';

export default function Component({ render, children, ...rest }) {
  const ref: RefObject<any> = useRef();
  const [component, componentDispatch] = useState(children);
  const nuomi = useNuomi();

  useEffect(() => {
    if (render) {
      const renderResult = render(ref.current, nuomi);
      let clear: any = null;
      let renderComponent: any = null;

      if (typeof renderResult === 'function') {
        clear = renderResult;
      } else if (Array.isArray(renderResult)) {
        clear = renderResult[1];
        renderComponent = renderResult[0];
      } else {
        renderComponent = renderResult;
      }

      componentDispatch(renderComponent);

      if (typeof clear === 'function') {
        return () => {
          clear();
        };
      }
    }
  }, []);

  return (
    <div {...rest} ref={ref}>
      {component}
    </div>
  );
}
