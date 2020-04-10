import React from 'react';
import { Alert } from '../antd';

export default function Tip({ type, ...rest }: any) {
  return <Alert {...rest} type={type} showIcon />;
}
