import React, { useState, useEffect } from 'react';
import { Link, useConnect } from 'nuomi';
import { Pagination } from '../antd';

export default function BlogEntry() {
  const [{ listSource }, dispatch] = useConnect();
  const pageSize = 20;
  const total = listSource.length;
  const [page, pageDispatch] = useState(1);
  const [data, dataDispatch] = useState([]);

  const onChange = (current: number) => {
    pageDispatch(current);
  };

  useEffect(() => {
    dispatch({ type: 'initData' });
  }, []);

  useEffect(() => {
    dataDispatch(listSource.slice((page - 1) * pageSize, pageSize));
  }, [page, listSource]);

  return (
    <div>
      <ul>
        {data.map(({ to, text }) => (
          <li key={to}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
      <Pagination current={page} pageSize={pageSize} total={total} onChange={onChange} />
    </div>
  );
}
