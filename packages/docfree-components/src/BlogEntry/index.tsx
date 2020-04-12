import React, { useState, useLayoutEffect } from 'react';
import { Link, useConnect, useNuomi, router } from 'nuomi';
import format from 'date-format';
import { Pagination, List } from '../antd';
import './style.less';

export default function BlogEntry({ pageSize }) {
  const [{ listSource }, dispatch] = useConnect();
  const {
    nuomiProps: { location },
  }: any = useNuomi();
  const total = listSource.length;
  const [page, pageDispatch] = useState(1);
  const [data, dataDispatch] = useState([]);

  const onChange = (current: number) => {
    const { url, search, ...rest } = location;
    router.location({ ...rest, query: { page: current } });
  };

  useLayoutEffect(() => {
    dispatch({ type: 'initData' });

    const unListener = router.listener(({ query }: any) => {
      pageDispatch(Number(query.page) || 1);
    });

    return () => {
      unListener();
    };
  }, []);

  useLayoutEffect(() => {
    const startIndex = (page - 1) * pageSize;
    dataDispatch(listSource.slice(startIndex, startIndex + pageSize));
  }, [page, listSource]);

  return (
    <div className="docfree-blog">
      <List
        dataSource={data}
        renderItem={({ to, text, ctime }) => (
          <List.Item>
            <Link to={to}>{text}</Link>
            <span>{format('yyyy/MM/dd', new Date(ctime))}</span>
          </List.Item>
        )}
      />
      <Pagination current={page} simple pageSize={pageSize} total={total} onChange={onChange} />
    </div>
  );
}
