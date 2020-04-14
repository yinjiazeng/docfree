import { matchHtml, pathParse, unistVisit, UnistNode } from 'docfree-utils';

export default function() {
  return function(tree: UnistNode) {
    unistVisit(tree, 'jsx', (node: UnistNode) => {
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
          const $of = `(function() {
            const _interopRequireDefault = function(obj) { return obj && obj.default ? obj.default : obj };
            return _interopRequireDefault(require(${JSON.stringify(
              `${pathParse(src).path}?getPropTypesDescription=1`,
            )}));
          })()`;

          node.value = `<${COMPONENT_NAME} of={${$of}} />`;
        }
      }
    });
  };
}
