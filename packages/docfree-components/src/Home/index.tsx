import React from 'react';
import { router } from 'nuomi';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from '../antd';

export default function Home({ title, description, link, features }) {
  const onClick = () => {
    router.location(link.to);
  };

  return (
    <div className="docfree-home">
      <h1>{title}</h1>
      <h2>{description}</h2>
      {!!link && !!link.text && (
        <p>
          <Button onClick={onClick}>
            {link.text}
            <ArrowRightOutlined />
          </Button>
        </p>
      )}
      {Array.isArray(features) && (
        <div>
          {features.map((item) => (
            <dl>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </dl>
          ))}
        </div>
      )}
    </div>
  );
}
