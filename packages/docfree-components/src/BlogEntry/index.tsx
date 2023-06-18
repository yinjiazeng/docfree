import React, { useLayoutEffect } from 'react';
import format from 'date-format';
import { Link, useConnect, useNuomi, router, Pagination, Empty } from '../components';
import './style.less';

export interface Data {
  to: string;
  text: string;
  date: string;
}

export interface GroupData {
  year: string;
  list: Data[];
}

export default function BlogEntry({ pageSize }) {
  const [{ listSource }, dispatch] = useConnect();
  const [{ location }] = useNuomi();
  const total = listSource.length;
  const page = Number(location.query.page) || 1;
  const startIndex = (page - 1) * pageSize;
  const source = listSource.slice(startIndex, startIndex + pageSize);
  const data: GroupData[] = [];

  source.forEach(({ to, text, ctime }) => {
    const dateStr = format('yyyy/MM/dd', new Date(ctime));
    const year = dateStr.substr(0, 7);
    const date = dateStr.substr(5);
    const find = data.find((item) => item.year === year);
    const item: Data = { date, to, text };

    if (find && find.year === year) {
      find.list.push(item);
    } else {
      data.push({
        year,
        list: [item],
      });
    }
  });

  const onChange = (current: number) => {
    const { url, search, ...rest } = location;
    router.push({ ...rest, query: { page: current } });
  };

  useLayoutEffect(() => {
    dispatch({ type: 'initData' });
  }, []);

  return (
    <div className="docfree-blog">
      <div className="docfree-blog-list">
        {data.length ? (
          data.map(({ year, list }) => (
            <dl key={year}>
              <dt>{year}</dt>
              {list.map(({ to, text, date }) => (
                <dd key={to}>
                  <span>{date}</span>
                  <Link to={to}>{text}</Link>
                </dd>
              ))}
            </dl>
          ))
        ) : (
          <Empty description={false} />
        )}
      </div>
      <Pagination current={page} simple pageSize={pageSize} total={total} onChange={onChange} />
    </div>
  );
}
