import propTypes from 'prop-types';
import { ObjectAny } from 'docfree-utils';

export { checkPropTypes, resetWarningCache } from 'prop-types';

export function instanceOf(expectedClass: any) {
  const func: any = propTypes.instanceOf(expectedClass);

  func.type = `instanceOf ${expectedClass.name}`;

  return func;
}

export function oneOf(types: any[]) {
  const func: any = propTypes.oneOf(types);

  func.type = types.map((item) => {
    if (
      item == null ||
      typeof item === 'string' ||
      typeof item === 'number' ||
      typeof item === 'boolean'
    ) {
      return JSON.stringify(item);
    }

    if (Array.isArray(item)) {
      return 'array';
    }

    return typeof item;
  });

  return func;
}

export function oneOfType(types: any[]) {
  const func: any = propTypes.oneOfType(types);

  func.type = types.map((item) => item.type);

  return func;
}

export function arrayOf(type: any) {
  const func: any = propTypes.arrayOf(type);

  func.type = `${type.type}[]`;

  return func;
}

export function objectOf(type: any) {
  const func: any = propTypes.objectOf(type);

  func.type = `{ [key]: ${type.type} }`;

  return func;
}

export function shape(obj: ObjectAny) {
  const func: any = propTypes.shape(obj);

  func.type = `{ ${Object.keys(obj)
    .map((key) => `${key}: ${obj[key].type}`)
    .join(', ')} }`;

  return func;
}

export function exact(obj: ObjectAny) {
  const func: any = propTypes.exact(obj);

  func.type = `{ ${Object.keys(obj)
    .map((key) => `${key}: ${obj[key].type}`)
    .join(', ')} }`;

  return func;
}
