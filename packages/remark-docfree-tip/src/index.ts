import { UnistNode } from 'docfree-utils';

module.exports = function() {
  return function({ children }) {
    if (Array.isArray(children)) {
      children.forEach((node: UnistNode, i) => {
        let matchTip: RegExpMatchArray | null = null;
        let textNode: UnistNode | null = null;
        const REGEXP = /^:{3}[^\n]*\n|\n:{3}$/g;

        if (
          node.type === 'paragraph' &&
          Array.isArray(node.children) &&
          node.children.length === 1 &&
          (textNode = node.children[0] || {}) &&
          textNode.type === 'text' &&
          typeof textNode.value === 'string' &&
          (matchTip = textNode.value.match(REGEXP)) &&
          matchTip.length === 2
        ) {
          const value = node.children[0].value.replace(REGEXP, '');
          const flag = matchTip[0].replace(/^:+/, '').trim();
          const array = flag.split(/\s*:\s*/g);
          let type = array[0];
          let lang = array[1];
          const content = value.trim();
          const match = content.match(/^([^\n]+)(?:\n+([\s\S]*))?$/);

          if (!['success', 'warning', 'info', 'error'].includes(type)) {
            if (type && !lang) {
              lang = type;
            }
            type = 'info';
          }

          if (match) {
            const message = (match[1] || '').trim();
            let description = (match[2] || '').trim();
            const code = {
              lang,
              content: description,
            };
            const codeString = JSON.stringify(code);

            if (lang) {
              description = `<Docfree.PreCode {...${codeString}} />`;
            } else {
              description = `(${codeString}).content`;
            }

            children[i] = {
              type: 'jsx',
              value: `<section><Docfree.Component render={function(){
                const { Alert } = require('antd');
                require('antd/lib/alert/style');
                return <Alert type="${type}" message="${message}" description={${description}} />;
              }} /></section>`,
            };
          }
        }
      });
    }
  };
};
