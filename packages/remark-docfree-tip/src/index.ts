export default () => {
  return ({ children }) => {
    children.forEach((node: any, i: number) => {
      if (node.type === 'code' && node.lang) {
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
              type: 'html',
              value: `<Docfree.Tip type="${type}" message="${message}" description={${description}} />`,
            };
          }
        }
      }
    });
  };
};
