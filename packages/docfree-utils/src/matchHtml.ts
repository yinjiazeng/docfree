const attrRegexp = new RegExp(`([\\w-$]+)(?:=['"]([^"']*)['"])?`, 'ig');

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

export interface MatchHtml {
  attrs: {
    [key: string]: string;
  };
  content: string;
}

export interface MatchHtmlResult {
  tag: string;
  content: string;
  matchs: MatchHtml[];
}

export default function(tag: string, source: string) {
  const htmlRegexp = new RegExp(
    `\\s*<${tag}(\\s*|\\s+[^>]*)(?:\\/|>([\\s\\S]*?)<\\/${tag})>\\s*`,
    'ig',
  );

  const result: MatchHtmlResult = {
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
}
