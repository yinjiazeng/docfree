import { AstNode } from './typings';

export default (ast: AstNode) => {
  const visitAst = (array: AstNode[], newAst: AstNode[] = []) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const node of array) {
      const { children, ...rest } = node;

      if (rest.type === 'link') {
        const { url, title } = node;
        const attrs: string[] = [];
        let props = {
          title,
          target: '_blank',
        };

        if (title && title.startsWith('{') && title.endsWith('}')) {
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
          ...visitAst(children || []),
          {
            type: 'html',
            value: '</a>',
          },
        ]);
      } else if (children) {
        newAst.push({ ...rest, children: visitAst(children) });
      } else {
        newAst.push(rest);
      }
    }

    return newAst;
  };

  return visitAst([ast])[0];
};
