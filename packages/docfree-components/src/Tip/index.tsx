import React from 'react';
import { Alert } from '../antd';

export default function Tip({ type, ...rest }) {
  return <Alert {...rest} type={type} showIcon />;
}
