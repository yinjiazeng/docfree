import React from 'react';
import { router } from 'nuomi';
import { Button } from '../antd';
import './style.less';

export default function Home({ title, description, buttons, features }) {
  const onClick = (to: string) => {
    if (to) {
      if (/^(https?:)?\/\//.test(to)) {
        window.location.href = to;
      } else {
        router.location(to);
      }
    }
  };

  return (
    <div className="docfree-home">
      {!!title && <h1>{title}</h1>}
      {!!description && <h2>{description}</h2>}
      {Array.isArray(buttons) && (
        <p>
          {buttons.map(({ to, text, ...rest }, i) => (
            <Button size="large" {...rest} key={i} onClick={() => onClick(to)}>
              {text}
            </Button>
          ))}
        </p>
      )}
      {Array.isArray(features) && (
        <div>
          {features.map((item, i) => (
            <dl key={i}>
              <dt>{item.title}</dt>
              <dd>{item.detail}</dd>
            </dl>
          ))}
        </div>
      )}
    </div>
  );
}
