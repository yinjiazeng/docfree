import React, { useState, useEffect } from 'react';
import { Link, useConnect } from 'nuomi';
import { Pagination, List } from '../antd';
import './style.less';

export default function BlogEntry() {
  const [{ listSource }, dispatch] = useConnect();
  const pageSize = 20;
  const total = listSource.length;
  const [page, pageDispatch] = useState(1);
  const [data, dataDispatch] = useState([]);
  const [loading, loadingDispatch] = useState(true);

  const onChange = (current: number) => {
    pageDispatch(current);
  };

  useEffect(() => {
    dispatch({ type: 'initData' });
  }, []);

  useEffect(() => {
    loadingDispatch(true);
    setTimeout(() => {
      const startIndex = (page - 1) * pageSize;

      dataDispatch(listSource.slice(startIndex, startIndex + pageSize));
      loadingDispatch(false);
    }, 300);
  }, [page, listSource]);

  return (
    <div className="docfree-blog">
      <List
        loading={loading}
        dataSource={data}
        renderItem={({ to, text, createDate }) => (
          <List.Item>
            <Link to={to}>{text}</Link>
            <span>{createDate}</span>
          </List.Item>
        )}
      />
      <Pagination current={page} simple pageSize={pageSize} total={total} onChange={onChange} />
    </div>
  );
}
