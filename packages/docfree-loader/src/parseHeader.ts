import remark from 'remark';
import parse from 'remark-parse';
import u from 'unist-builder';

const getTexts = (ast: any) => {
  let text: string[] = [];
  Object.keys(ast).forEach((key) => {
    if (key === 'type' && ast[key] === 'text') {
      text.push(ast.value);
    }
    if (key === 'children') {
      ast[key].forEach((node: any) => {
        text = getTexts(node).concat(text);
      });
    }
  });
  return text;
};

export default function parseHeader(content: string) {
  const ret: any = {
    data: [],
    content,
  };
  const astTree = remark()
    .use(parse)
    .parse(content);
  const parser = (ast: any) => {
    Object.keys(ast).forEach((key) => {
      if (key === 'type' && ast[key] === 'heading') {
        const { depth } = ast;
        const text = getTexts(ast).join('');
        ret.data.push({ title: text, depth });
        ast.children = [
          u('html', { value: `<HashLink to="#${text}">` }),
          u('text', { value: '#' }),
          u('html', { value: `</HashLink>` }),
          u('text', { value: text }),
        ];
      } else if (key === 'children') {
        ast[key].forEach((node: any) => {
          parser(node);
        });
      }
    });
    return ast;
  };

  ret.content = remark().stringify(parser(astTree));

  return ret;
}
