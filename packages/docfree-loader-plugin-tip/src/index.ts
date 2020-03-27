module.exports = {
  lang: 'tip',
  transform(content: string, args: any) {
    const lang = args[1];
    const match = content.match(/^([^\n]+)(?:\n+([\s\S]*))?$/);

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
        value: `<Docfree.Tip type="${args[0] ||
          'info'}" message="${message}" description={${description}} />`,
      };
    }
  },
};
