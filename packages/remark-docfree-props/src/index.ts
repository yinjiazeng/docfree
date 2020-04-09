import { Parent, Node } from 'unist';
import { matchHtml, visit } from 'docfree-utils';

export default () => {
  return (tree: Parent) => {
    visit(tree, 'jsx', (node: Node) => {
      const { value } = node;
      const COMPONENT_NAME = 'Docfree.Props';

      if (typeof value === 'string' && value.startsWith(`<${COMPONENT_NAME}`)) {
        const {
          matchs: [
            {
              attrs: { src },
            },
          ],
        } = matchHtml(COMPONENT_NAME, value);

        if (src) {
          let queryStart = '?';
          if (src.indexOf('?') !== -1) {
            queryStart = '&';
          }
          const $of = `(function() {
            const _interopRequireDefault = function(obj) { return obj && obj.default ? obj.default : obj };
            return _interopRequireDefault(require('${src}${queryStart}getPropTypesDescription=1'));
          })()`;

          node.value = `<${COMPONENT_NAME} of={${$of}} />`;
        }
      }
    });
  };
};
