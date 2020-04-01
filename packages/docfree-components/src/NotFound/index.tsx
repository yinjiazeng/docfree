import React, { useLayoutEffect } from 'react';
import { store } from 'nuomi';
import { Result } from '../antd';

export default function NotFound() {
  useLayoutEffect(() => {
    store.dispatch({
      type: 'global/_updateState',
      payload: {
        showPageSidebar: false,
      },
    });
  }, []);

  return <Result status="404" title="404" />;
}
