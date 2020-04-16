import React, { useRef, useState, useEffect, RefObject } from 'react';
import { useNuomi } from '../components';

export default function Component({ render, children, ...rest }) {
  const ref: RefObject<any> = useRef();
  const [component, componentDispatch] = useState(children);
  const { nuomiProps } = useNuomi();

  useEffect(() => {
    if (render) {
      componentDispatch(render(ref.current, nuomiProps));
    }
  }, []);

  return (
    <div {...rest} ref={ref}>
      {component}
    </div>
  );
}
