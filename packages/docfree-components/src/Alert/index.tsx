import React from 'react';
import { Alert as AntdAlert } from '../antd';

export default function Alert({ type, ...rest }) {
  return <AntdAlert {...rest} type={type || 'info'} showIcon />;
}
