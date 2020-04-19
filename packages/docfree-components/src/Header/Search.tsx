import React, { useState, ReactElement } from 'react';
import { router, Input, Popover, List, Icon } from '../components';

export interface DataSource {
  to: { pathname: string; hash: string };
  text: string | ReactElement;
  key: number;
}

export default function Search({ data, type }) {
  const [visible, visibleDispatch] = useState(false);
  const [source, sourceDispatch]: [DataSource[], any] = useState([]);

  const onVisibleChange = (v: Boolean) => {
    if (v && source.length) {
      visibleDispatch(true);
    } else {
      visibleDispatch(false);
    }
  };

  const onClick = ({ pathname, hash }) => {
    const location = router.location();

    if (location.pathname === pathname) {
      hash = `#${hash}`;
      if (type === 'hash') {
        hash = `#${pathname}${location.search}${hash}`;
      }
      window.location.hash = hash;
    } else {
      // 在onInit中处理
      router.location({ pathname }, { hash });
    }
  };

  const onChange = ({ target }) => {
    const value = target.value.trim();
    const dataSource: DataSource[] = [];
    let key = 0;

    if (value) {
      data.forEach(({ pathname, filename, title, headings, path: p }) => {
        const titles = [{ text: title, depth: 1 }, ...headings];
        const path = pathname + (/^README$/i.test(filename) && p === '/' ? '' : filename);

        titles.forEach(({ text, depth }) => {
          const index = text.indexOf(value);

          if (index !== -1) {
            const startText = text.substr(0, index);
            const endText = text.substr(index + value.length);
            const txt = (
              <>
                {startText}
                <b>{value}</b>
                {endText}
              </>
            );

            dataSource.push({
              to: { pathname: path, hash: depth === 1 ? '' : text },
              text:
                depth === 1 ? (
                  txt
                ) : (
                  <>
                    {title} <Icon type="right" /> {txt}
                  </>
                ),
              key,
            });

            key += 1;
          }
        });
      });
      visibleDispatch(true);
    } else {
      visibleDispatch(false);
    }

    sourceDispatch(dataSource);
  };

  return (
    <div className="docfree-search">
      <Popover
        overlayClassName="docfree-popover"
        overlayStyle={!visible ? { display: 'none' } : undefined}
        placement="bottomLeft"
        trigger="focus"
        title="搜索结果"
        visible={visible}
        onVisibleChange={onVisibleChange}
        content={
          <List
            dataSource={source}
            renderItem={({ text, to }) => (
              <List.Item
                onClick={() => {
                  onClick(to);
                }}>
                <span>{text}</span>
              </List.Item>
            )}
          />
        }>
        <Input prefix={<Icon type="search" />} onChange={onChange} placeholder="搜索内容..." />
      </Popover>
    </div>
  );
}
