import React from 'react';
import PropTypes from 'prop-types';

require('./a.css');
require('./a.less');

export default function Demo({ title }) {
  return <div>demo</div>;
}

Demo.defaultProps = {
  title: 'title',
};

Demo.propTypes = {
  // xxxx
  title: PropTypes.string,
};
