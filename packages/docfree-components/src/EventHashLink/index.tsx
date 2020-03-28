import { router } from 'nuomi';
import HashLink, { LinkProps } from '../HashLink';

export default class EventHashLink extends HashLink {
  static data: { top: number; to: string }[] = [];

  offsetTop: number;

  constructor(props: LinkProps) {
    super(props);
    this.offsetTop = 0;
  }

  componentDidMount() {
    this.offsetTop = this.ref.current.offsetTop;
    const { to } = this.props;
    const { data } = EventHashLink;

    if (!data.length) {
      window.addEventListener('scroll', this.scrollHandler);
    }

    data.push({ to, top: this.offsetTop });
  }

  componentWillUnmount() {
    const { to } = this.props;
    const { data } = EventHashLink;

    EventHashLink.data = data.filter((item) => item.to !== to);

    if (!EventHashLink.data.length) {
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
    const { data } = EventHashLink;

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
}
