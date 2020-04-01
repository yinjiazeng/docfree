import React, { PureComponent, RefObject, createRef } from 'react';
import { RouterContext } from 'nuomi/lib/components/Context';

export interface LinkProps {
  to: string;
  [key: string]: any;
}

export default class HashLink extends PureComponent<LinkProps> {
  ref: RefObject<any>;

  constructor(props: LinkProps) {
    super(props);
    this.ref = createRef();
  }

  render() {
    const { to, children, ...rest } = this.props;

    return (
      <RouterContext.Consumer>
        {({ type, location }) => {
          let id = to;
          const { pathname, search, hash } = location;
          const activeClassName = hash === `#${to}` ? 'current' : undefined;

          if (type === 'hash') {
            id = `${pathname}${search}#${to}`;
          }

          return (
            <a id={id} {...rest} ref={this.ref} href={`#${id}`} className={activeClassName}>
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
