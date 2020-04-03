module.exports = {
  lang: 'tip',
  transform(content: string, args: any) {
    let [type, lang] = args;
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

      return {
        type: 'html',
        value: `<Docfree.Tip type="${type}" message="${message}" description={${description}} />`,
      };
    }
  },
};
