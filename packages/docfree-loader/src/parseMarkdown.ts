import remark from 'remark';
import parse from 'remark-parse';
import u from 'unist-builder';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
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

export default function parseMarkdown(content: string) {
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
        ret.data.push({ title: text, depth });
        node.children = [
          u('html', { value: `<HashLink to="#${text}">` }),
          u('text', { value: '#' }),
          u('html', { value: `</HashLink>` }),
          u('text', { value: text }),
        ];
      } else if (node.type === 'code') {
        if (node.lang === 'jsx') {
          const ast = babelParser.parse(node.value, { plugins: ['jsx'] });
          // traverse(ast, {
          //   enter(path) {
          //     path.node = null;
          //   },
          // });
          const jsx = '';
          const code = '';
          arr[i] = u('html', {
            value: `${code}

              <Playground code={\`${node.value.trim()}\`}>
              ${jsx}
              </Playground>
            `,
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

// parseMarkdown(
//   `
// \`\`\`jsx
// const a = 1;
// <div></div>
// \`\`\`
// `,
// )

// console.log(
//   parseMarkdown(
//     `
//   \`\`\`jsx
//   <div></div>
//   \`\`\`
//   `,
//   ),
// );
