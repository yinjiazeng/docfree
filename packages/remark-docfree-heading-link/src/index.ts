import { unistVisit, UnistNode } from 'docfree-utils';

export type Heading = {
  text: string;
  depth: number;
  level: number;
};

export type Options = {
  complete?: (headings: Heading[]) => void;
  [key: string]: any;
};

export type HeadingNode = UnistNode & {
  children: UnistNode[];
  depth: number;
};

const getTexts = (tree: UnistNode[]) => {
  let text: any = [];

  tree.forEach(({ value, type, children }) => {
    if (type === 'text' && value) {
      text.push(value);
    }

    if (Array.isArray(children)) {
      text = getTexts(children).concat(text);
    }
  });
  return text;
};

export default function(options: Options = {}) {
  return function(tree: UnistNode) {
    const headings: Heading[] = [];

    unistVisit(tree, 'heading', (node: HeadingNode) => {
      const { depth } = node;
      const text = getTexts([node]).join('');

      headings.push({ text, depth, level: depth > 1 ? depth - 1 : 0 });
      node.children = [
        {
          type: 'jsx',
          value: `<Docfree.AnchorLinkEnhance to="${text}">#</Docfree.AnchorLinkEnhance><span>${text}</span>`,
        },
      ];
    });

    if (options.complete) {
      options.complete(headings);
    }
  };
}
