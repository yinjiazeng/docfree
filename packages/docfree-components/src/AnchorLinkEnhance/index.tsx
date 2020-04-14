import { router } from '../components';
import AnchorLink, { AnchorLinkProps } from '../AnchorLink';

export default class AnchorLinkEnhance extends AnchorLink {
  static data: { top: number; to: string }[] = [];

  offsetTop: number;

  constructor(props: AnchorLinkProps) {
    super(props);
    this.offsetTop = 0;
  }

  componentDidMount() {
    // 解决offsetTop不准
    setTimeout(() => {
      const { current } = this.ref;
      const style = window.getComputedStyle(current);
      this.offsetTop = current.offsetTop + parseFloat(style.paddingTop) || 0;
      const { to } = this.props;
      const { data } = AnchorLinkEnhance;

      if (!data.length) {
        // 延迟绑定滚动事件，防止和首次打开页面hash跳转冲突
        setTimeout(() => {
          window.addEventListener('scroll', this.scrollHandler);
        }, 1500);
      }

      data.push({ to, top: this.offsetTop });
    }, 0);
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

    router.replace({ pathname, search, hash });
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
