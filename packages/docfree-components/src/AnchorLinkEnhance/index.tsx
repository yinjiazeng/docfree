import { router } from 'nuomi';
import AnchorLink, { AnchorLinkProps } from '../AnchorLink';

export default class AnchorLinkEnhance extends AnchorLink {
  static data: { top: number; to: string }[] = [];

  offsetTop: number;

  constructor(props: AnchorLinkProps) {
    super(props);
    this.offsetTop = 0;
  }

  componentDidMount() {
    this.offsetTop = this.ref.current.offsetTop;
    const { to } = this.props;
    const { data } = AnchorLinkEnhance;

    if (!data.length) {
      window.addEventListener('scroll', this.scrollHandler);
    }

    data.push({ to, top: this.offsetTop });
  }

  componentWillUnmount() {
    const { to } = this.props;
    const { data } = AnchorLinkEnhance;

    AnchorLinkEnhance.data = data.filter((item) => item.to !== to);

    if (!AnchorLinkEnhance.data.length) {
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
    const { data } = AnchorLinkEnhance;

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
