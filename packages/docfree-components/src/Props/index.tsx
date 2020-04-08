import React, { ComponentType, useMemo, ReactElement } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export type PropsApi = string | ReactElement;

export interface PropsProps {
  titles: string[];
  datas?: PropsApi[][];
  of?: ComponentType & {
    __PROPTYPES_DESCRIPTIONS__?: {
      [key: string]: any;
    };
  };
}

function Props({ titles, datas, of }: PropsProps) {
  const props = useMemo(() => {
    let array: PropsApi[][] = [];
    if (datas) {
      array = [...datas];
    } else if (of) {
      const propTypes = of.propTypes || {};
      const defaultProps = of.defaultProps || {};
      // eslint-disable-next-line no-underscore-dangle
      const descriptions = of.__PROPTYPES_DESCRIPTIONS__ || {};
      const keys = Object.keys(propTypes);

      keys.forEach((key) => {
        array.push([key, propTypes[key].type, defaultProps[key], descriptions[key]]);
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
  datas: null,
  of: null,
};

Props.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  datas: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
  ]),
  of: PropTypes.elementType,
};

export default Props;
