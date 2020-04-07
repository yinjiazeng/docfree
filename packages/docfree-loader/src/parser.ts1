import remark from 'remark';
import mdx from 'remark-mdx';
import { OptionObject } from 'loader-utils';
import extendLink from './extendLink';
import { AstNode, ParserResult } from './typings';

const getTexts = (arr: AstNode[]) => {
  let text: string[] = [];
  arr.forEach((node) => {
    if (node.type === 'text') {
      text.push(node.value);
    }
    if (node.children) {
      text = getTexts(node.children).concat(text);
    }
  });
  return text;
};

export default ({ content, ...rest }, plugins) => {
  const ret: ParserResult = {
    heading: [],
    content,
  };
  let astTree = remark()
    .use(mdx)
    .parse(content);

  astTree = extendLink(astTree);

  const parser = (arr: AstNode[]) => {
    arr.forEach((node, i) => {
      if (node.type === 'heading') {
        const { depth } = node;
        const text = getTexts([node]).join('');
        ret.heading.push({ text, depth, level: depth > 1 ? depth - 1 : 0 });
        node.children = [
          {
            type: 'html',
            value: `<Docfree.AnchorLinkEnhance to="${text}">#</Docfree.AnchorLinkEnhance> ${text}`,
          },
        ];
      } else if (node.type === 'code' && Array.isArray(plugins)) {
        if (node.lang) {
          const array = node.lang.split(':');
          const lang = array[0];

          plugins.forEach((value) => {
            if (value) {
              let plugin = value;
              if (typeof plugin === 'string') {
                plugin = require(`docfree-loader-plugin-${plugin}`);
              }
              if (!plugin.lang) {
                throw new Error('docfree-loader插件返回值必须包含lang属性');
              }
              if (plugin.lang === lang) {
                if (typeof plugin.transform === 'function') {
                  const args = array.slice(1);
                  const ast = plugin.transform(node.value.trim(), args, rest);
                  if (ast && ast.type) {
                    arr[i] = ast;
                  }
                }
              }
            }
          });
        }
      } else if (node.children) {
        parser(node.children);
      }
    });
    return arr;
  };

  ret.content = remark()
    .use(mdx)
    .stringify(parser([astTree])[0]);

  return ret;
};
