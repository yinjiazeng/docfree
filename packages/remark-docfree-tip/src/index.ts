import { Node as UnistNode } from 'unist';

export interface Node extends UnistNode {
  lang?: string;
}

module.exports = function() {
  return function({ children }: UnistNode) {
    if (Array.isArray(children)) {
      children.forEach((node: Node, i) => {
        if (node.type === 'code' && typeof node.value === 'string' && node.lang) {
          const array = node.lang.split(':');
          const name = array[0];

          if (name === 'tip') {
            let type = array[1];
            let lang = array[2];
            const content = node.value.trim();
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
                  const Alert = require('@antd/lib/alert').default;
                  require('@antd/lib/alert/style');
                  return <Alert type="${type}" message="${message}" description={${description}} />;
                }} /></section>`,
              };
            }
          }
        }
      });
    }
  };
};
