import propTypes from 'prop-types';
import { ObjectAny } from 'docfree-utils';

const basePropTypes: ObjectAny = {};

[
  'any',
  'string',
  'array',
  'bool',
  'func',
  'number',
  'object',
  'node',
  'element',
  'symbol',
  'elementType',
].forEach((type) => {
  const func: any = (basePropTypes[type] = function(...args: any) {
    return propTypes[type](...args);
  });

  func.isRequired = function(...args: any) {
    return propTypes[type].isRequired(...args);
  };

  if (type === 'func') {
    type = 'function';
  } else if (type === 'bool') {
    type = 'boolean';
  }

  func.type = func.isRequired.type = type;
});

export const {
  any,
  string,
  array,
  bool,
  func,
  number,
  object,
  node,
  element,
  symbol,
  elementType,
} = basePropTypes;
