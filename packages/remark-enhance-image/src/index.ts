import { Node } from 'unist';
import visit from 'unist-util-visit';

export interface EnhanceImageOptions {
  publicPath?: string;
}

export default function(options: EnhanceImageOptions = {}) {
  const { publicPath = '' } = options;

  const getUrl = (url: any) => {
    if (typeof url === 'string' && /^~/.test(url)) {
      return url.replace(/^~/, publicPath);
    }

    return url;
  };

  return function(tree: Node) {
    visit(tree, 'image', (node) => {
      node.url = getUrl(node.url);
    });
  };
}
