import React, { createRef, Component, RefObject } from 'react';
import { router } from 'nuomi';

export interface LinkProps {
  to: string;
}

export default class BrowserLink extends Component<LinkProps> {
  ref: RefObject<any>;

  offsetTop: number;

  constructor(props: LinkProps) {
    super(props);
    this.ref = createRef();
    this.offsetTop = 0;
  }

  componentDidMount() {
    this.offsetTop = this.ref.current.offsetTop;
    const { to } = this.props;
    const { data } = BrowserLink;

    if (!data.length) {
      window.addEventListener('scroll', this.scrollHandler);
    }

    data.push({ to, top: this.offsetTop });
  }

  componentWillUnmount() {
    const { to } = this.props;
    const { data } = BrowserLink;

    BrowserLink.data = data.filter((item) => item.to !== to);

    if (!BrowserLink.data.length) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  scrollHandler = () => {
    const { to: hash } = this.findData();
    const { pathname, search } = router.location();
    router.location({ pathname, search, hash });
  };

  findData = () => {
    const scrollTop = window.scrollY;
    const { data } = BrowserLink;

    return (
      data.find(({ top }, i) => {
        const next = data[i + 1];
        const bool = top <= scrollTop;
        if (!next) {
          return bool;
        }
        return bool && scrollTop < next.top;
      }) || { to: '' }
    );
  };

  static data: { top: number; to: string }[] = [];

  render() {
    const { to, children } = this.props;

    return (
      <a ref={this.ref} href={`#${to}`} id={to}>
        {children}
      </a>
    );
  }
}
