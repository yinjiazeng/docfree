import React, { useEffect } from 'react';
import { useConnect, connect } from 'nuomi';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

function Content({ children }) {
  const [{ showCode }, dispatch] = useConnect();

  const showCodeHandler = () => {
    dispatch({
      type: '_updateState',
      payload: {
        showCode: !showCode,
      },
    });
  };

  useEffect(() => {
    dispatch({ type: 'initData' });
  }, []);

  const Icon = showCode ? EyeInvisibleOutlined : EyeOutlined;

  return (
    <>
      <Icon onClick={showCodeHandler} />
      {children}
    </>
  );
}

export default connect()(Content);
