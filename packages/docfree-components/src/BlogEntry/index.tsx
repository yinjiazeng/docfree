import React, { useLayoutEffect } from 'react';
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
  const page = Number(location.query.page) || 1;
  const startIndex = (page - 1) * pageSize;
  const data = listSource.slice(startIndex, startIndex + pageSize);

  const onChange = (current: number) => {
    const { url, search, ...rest } = location;
    router.location({ ...rest, query: { page: current } });
  };

  useLayoutEffect(() => {
    dispatch({ type: 'initData' });
  }, []);

  return (
    <div className="docfree-blog">
      <List
        dataSource={data}
        renderItem={({ to, text, ctime }: any) => (
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
