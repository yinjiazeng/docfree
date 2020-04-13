import { Node } from 'unist';

export type TreeNode = Node & {
  children?: TreeNode[];
  [key: string]: any;
};

const visit = (array: TreeNode[] = [], newAst: TreeNode[] = []) => {
  array.forEach((node) => {
    const { children, ...rest } = node;

    if (rest.type === 'link') {
      const { url, title } = node;
      const attrs: string[] = [];
      let props = {
        title,
        target: '_blank',
      };

      if (title && title.trimLeft().startsWith('{') && title.trimRight().endsWith('}')) {
        try {
          // eslint-disable-next-line no-eval
          const { href, ...restProps } = eval(`(${title})`);

          props = { ...props, title: null, ...restProps };
        } catch (e) {
          //
        }
      }

      Object.keys(props).forEach((key) => {
        const value = props[key];

        if (typeof value === 'string') {
          attrs.push(`${key}="${value}"`);
        }
      });

      newAst = newAst.concat([
        {
          type: 'html',
          value: `<a href="${url}" ${attrs.join(' ')}>`,
        },
        ...visit(children || []),
        {
          type: 'html',
          value: '</a>',
        },
      ]);
    } else if (children) {
      newAst.push({ ...rest, children: visit(children) });
    } else {
      newAst.push(rest);
    }
  });

  return newAst;
};

export default function() {
  return function(tree: Node) {
    if (Array.isArray(tree.children)) {
      tree.children = visit(tree.children);
    }
  };
}
