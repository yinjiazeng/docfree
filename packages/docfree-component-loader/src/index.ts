import { babel, types, traverse, generator, babelOptions } from 'docfree-utils';

const MEMBER_NAME = '__PROPTYPES_DESCRIPTIONS__';

const getObjectExpression = ({ properties }: types.ObjectExpression) => {
  const desc = {};

  properties.forEach((item) => {
    if (types.isObjectProperty(item)) {
      if (
        (types.isIdentifier(item.key) || types.isStringLiteral(item.key)) &&
        item.leadingComments
      ) {
        let prop: string;
        const lastComment = item.leadingComments.slice(-1);

        if (types.isIdentifier(item.key)) {
          prop = item.key.name;
        } else {
          prop = item.key.value;
        }

        if (lastComment.length && prop) {
          desc[prop] = lastComment[0].value;
        }
      }
    }
  });

  return types.objectExpression(
    Object.keys(desc).map((key) =>
      types.objectProperty(types.identifier(key), types.stringLiteral(desc[key])),
    ),
  );
};

module.exports = function(this: any, content: string) {
  const ast: any = babel.parseSync(content, {
    ...babelOptions,
    filename: this.resourcePath,
  });

  if (ast) {
    traverse(ast, {
      StringLiteral(path: babel.NodePath<types.StringLiteral>) {
        if (path.node.value === 'prop-types' && types.isImportDeclaration(path.parent)) {
          path.replaceWith(types.stringLiteral('docfree-prop-types'));
        }
      },
      ClassProperty(path: any) {
        if (
          path.node.static === true &&
          types.isIdentifier(path.node.key) &&
          path.node.key.name === 'propTypes' &&
          types.isObjectExpression(path.node.value) &&
          path.node.value.properties.length
        ) {
          const { value } = path.node;
          path.insertAfter(
            types.classProperty(
              types.identifier(MEMBER_NAME),
              getObjectExpression(value),
              null,
              null,
              false,
              true,
            ),
          );
        }
      },
      ExpressionStatement(path: any) {
        if (types.isProgram(path.parent)) {
          const { node } = path;

          if (
            types.isExpressionStatement(node) &&
            types.isAssignmentExpression(node.expression) &&
            types.isMemberExpression(node.expression.left) &&
            types.isIdentifier(node.expression.left.object) &&
            types.isIdentifier(node.expression.left.property) &&
            node.expression.left.property.name === 'propTypes' &&
            types.isObjectExpression(node.expression.right)
          ) {
            const {
              expression: { left, right },
            }: types.ExpressionStatement = node;

            path.insertAfter(
              types.expressionStatement(
                types.assignmentExpression(
                  '=',
                  types.memberExpression(left.object, types.identifier(MEMBER_NAME)),
                  getObjectExpression(right),
                ),
              ),
            );
          }
        }
      },
    });
  }

  const { code } = generator(ast, {}, content);

  return code;
};
