import React, { ComponentType, useMemo, ReactElement } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export type PropsApi = string | ReactElement;

export interface PropsProps {
  titles: string[];
  apis?: PropsApi[][];
  of?: ComponentType;
}

function Props({ titles, apis, of }: PropsProps) {
  const props = useMemo(() => {
    let array: PropsApi[][] = [];
    if (apis) {
      array = [...apis];
    } else if (of) {
      if (!of.propTypes) {
        throw new Error(`组件${of.displayName || of.name || ''}必须包含propTypes属性`);
      }

      const keys = Object.keys(of.propTypes);

      keys.forEach((key) => {
        const prop = [key, ''];

        if (of.defaultProps) {
          prop.push(JSON.stringify(of.defaultProps[key]));
        }

        array.push(prop);
      });
    }

    const size = titles.length;

    return array.map((item) => {
      const len = item.length;

      if (len > size) {
        return item.slice(0, size);
      }

      if (len < size) {
        return Object.assign(new Array(size).fill(undefined), item);
      }

      return item;
    });
  }, []);

  return (
    <table className="docfree-props">
      <thead>
        <tr>
          {titles.map((text, i) => (
            <th key={i}>{text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.map((item, i) => (
          <tr key={i}>
            {item.map((text, j) => (
              <td key={j}>{text === undefined ? '-' : text}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Props.defaultProps = {
  titles: ['参数', '类型', '默认值', '说明'],
  apis: null,
  of: null,
};

// const a = PropTypes.arrayOf(PropTypes.string);
// try {
//   PropTypes.checkPropTypes({ title: PropTypes.oneOf(['x1xx']).isRequired }, null, 'title', 'xxx');
// } catch (e) {
//   // console.log(e);
// }

Props.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  apis: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
  ]),
  of: PropTypes.elementType,
};

export default Props;
