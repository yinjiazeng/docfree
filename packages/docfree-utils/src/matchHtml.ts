const attrRegexp = new RegExp(`([\\w-$]+)(?:=['"]([^"']+)['"])?`, 'ig');
const getAttrs = (content: string) => {
  const result: { [key: string]: string } = {};
  if (content) {
    content.replace(attrRegexp, (attr, key, value) => {
      result[key] = value || '';
      return attr;
    });
  }

  return result;
};

export default (tag: string, source: string) => {
  const htmlRegexp = new RegExp(
    `\\s*<${tag}(\\s*|\\s+[^>]*)(?:\\/|>([\\s\\S]*?)<\\/${tag})>\\s*`,
    'ig',
  );
  const result: { tag: string; content: string; matchs: any[] } = {
    tag,
    content: source,
    matchs: [],
  };

  result.content = source.replace(htmlRegexp, (html, attrs = '', content = '') => {
    result.matchs.push({
      attrs: getAttrs(attrs.trim()),
      content: content.trim(),
    });
    return '';
  });

  return result;
};
