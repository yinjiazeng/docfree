import React, { useState, ReactElement } from 'react';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import { router } from 'nuomi';
import { Input, Popover, List } from '../antd';

interface DataSource {
  to: { pathname: string; hash: string };
  text: string | ReactElement;
  key: number;
}

export default function Search({ data }) {
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
      router.location(pathname, true);
      if (hash) {
        setTimeout(() => {
          const { hash: h } = window.location;
          window.location.hash = `${h}#${hash}`;
        }, 0);
      }
    } else {
      router.location({ pathname, hash });
    }
  };

  const onChange = ({ target }) => {
    const value = target.value.trim();
    const dataSource: DataSource[] = [];
    let key = 0;

    if (value) {
      data.forEach(({ pathname, filename, title, sidebarMenus, pageSidebarMenus }) => {
        const menus = [{ text: title, depth: 1 }, ...sidebarMenus, ...pageSidebarMenus];
        const path = pathname + filename;

        menus.forEach(({ text, depth }) => {
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
                    {title} <RightOutlined /> {txt}
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
        <Input prefix={<SearchOutlined />} onChange={onChange} placeholder="搜索内容..." />
      </Popover>
    </div>
  );
}
