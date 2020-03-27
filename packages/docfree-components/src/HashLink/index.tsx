import React from 'react';
import { router } from 'nuomi';
import BrowserLink from '../BrowserLink';

export default class HashLink extends BrowserLink {
  render() {
    const { to, children } = this.props;
    const { pathname, search } = router.location();
    const id = `${pathname}${search}#${to}`;

    return (
      <a ref={this.ref} href={`#${id}`} id={id}>
        {children}
      </a>
    );
  }
}
