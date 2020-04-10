import React from 'react';
import PropTypes from 'prop-types';

require('./a.css');
require('./a.less');

export default function Demo({ title = 'xx', data, item, haha }: any) {
  return <div>{title}</div>;
}

Demo.defaultProps = {
  title: 'title',
};

Demo.propTypes = {
  // xxxx
  title: PropTypes.string,
  // 11112`2`1
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
  item: PropTypes.oneOf(['1', '2', 3]),
  /*
    sdsdsdsd
    sdsd
    dfdfdfdf
  */
  haha: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.number)]),
};
