import React, { useLayoutEffect } from 'react';
import { globalStore, Result } from '../components';
import './style.less';

export default function NotFound() {
  useLayoutEffect(() => {
    globalStore.dispatch({
      type: 'global/@update',
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
