import React, { useLayoutEffect } from 'react';
import { store } from 'nuomi';
import { Result } from '../antd';
import './style.less';

export default function NotFound() {
  useLayoutEffect(() => {
    store.dispatch({
      type: 'global/_updateState',
      payload: {
        showPageSidebar: false,
      },
    });
  }, []);

  return (
    <div className="docfree-404">
      <Result status="404" title="Not Found" />
    </div>
  );
}
