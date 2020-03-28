import remark from 'remark';
import parse from 'remark-parse';
import { getConfig } from 'docfree-utils';
import { OptionObject } from 'loader-utils';
import { AstNode, ParseResult } from './typings';

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

export default function parseMarkdown({ content, ...rest }, options: OptionObject) {
  const ret: ParseResult = {
    data: [],
    content,
  };
  const astTree = remark()
    .use(parse)
    .parse(content);
  const parser = (arr: AstNode[]) => {
    arr.forEach((node, i) => {
      if (node.type === 'heading') {
        const { depth } = node;
        const text = getTexts([node]).join('');
        ret.data.push({ text, depth, level: depth > 1 ? depth - 2 : 0 });
        node.children = [
          {
            type: 'html',
            value: `<Docfree.EventHashLink to="${text}">#</Docfree.EventHashLink> ${text}`,
          },
        ];
      } else if (node.type === 'code' && Array.isArray(options.plugins)) {
        if (node.lang) {
          const array = node.lang.split(':');
          const lang = array[0];

          options.plugins.forEach((value) => {
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

  ret.content = remark().stringify(parser([astTree])[0]);

  return ret;
}
