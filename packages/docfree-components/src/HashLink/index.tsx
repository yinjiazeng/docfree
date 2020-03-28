import React, { PureComponent, RefObject, createRef } from 'react';
import { RouterContext } from 'nuomi/lib/components/Context';

export interface LinkProps {
  to: string;
}

export default class HashLink extends PureComponent<LinkProps> {
  ref: RefObject<any>;

  constructor(props: LinkProps) {
    super(props);
    this.ref = createRef();
  }

  render() {
    const { to, children } = this.props;
    let id = to;

    return (
      <RouterContext.Consumer>
        {({ type, location }) => {
          const { pathname, search, hash } = location;
          const activeClassName = hash === `#${to}` ? 'active' : undefined;

          if (type === 'hash') {
            id = `${pathname}${search}#${to}`;
          }

          return (
            <a ref={this.ref} href={`#${id}`} id={id} className={activeClassName}>
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
