import visit from 'unist-util-visit';
import { Parent, Node } from 'unist';

export type Heading = {
  text: string;
  depth: number;
  level: number;
};

export type Options = {
  complete?: (headings: Heading[]) => void;
  [key: string]: any;
};

export type HeadingNode = Node & {
  children: Node[];
  depth: number;
};

const getTexts = (tree: Node[]) => {
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

export default (options: Options = {}) => {
  return (tree: Parent) => {
    const headings: Heading[] = [];

    visit(tree, 'heading', (node: HeadingNode) => {
      const { depth } = node;
      const text = getTexts([node]).join('');

      headings.push({ text, depth, level: depth > 1 ? depth - 1 : 0 });
      node.children = [
        {
          type: 'html',
          value: `<Docfree.AnchorLinkEnhance to="${text}">#</Docfree.AnchorLinkEnhance> ${text}`,
        },
      ];
    });

    if (options.complete) {
      options.complete(headings);
    }
  };
};
