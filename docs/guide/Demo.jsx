import React from 'react';
import { Button } from 'antd';
import propTypes from 'prop-types';
import style from './style.module.less';

class Demo extends React.Component {
  render() {
    return (
      <div className={style.buttons}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}

Demo.defaultProps = {
  title: 'docfree',
  isActive: null,
};

Demo.propTypes = {
  // 标题
  title: propTypes.oneOf(['docfree', true, false, null]),
  // 是否选中
  isActive: propTypes.func,
};

export default Demo;
