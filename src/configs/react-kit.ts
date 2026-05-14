import type { RuleFunction } from "@eslint-react/kit";
import type { Linter } from "eslint";

import kit, { merge } from "@eslint-react/kit";
import { AST_NODE_TYPES } from "@typescript-eslint/utils";

/**
 * Enforce arrow functions for React function components.
 * Replacement for `react/function-component-definition`.
 */
const functionComponentDefinitionRule: RuleFunction = (
  context,
  { collect, hint },
) => {
  const { query, visitor } = collect.components(context, {
    hint:
      hint.component.Default &
      ~hint.component.DoNotIncludeFunctionDefinedAsObjectMethod,
  });
  return merge(visitor, {
    "Program:exit"(program) {
      for (const { node } of query.all(program)) {
        if (node.type === AST_NODE_TYPES.ArrowFunctionExpression) continue;
        context.report({
          message: "Function components must be defined with arrow functions.",
          node,
          suggest: [
            {
              desc: "Convert to arrow function.",
              fix(fixer) {
                if (node.generator) return null;
                const source = context.sourceCode;
                const prefix = node.async ? "async " : "";
                const typeParameters = node.typeParameters
                  ? source.getText(node.typeParameters)
                  : "";
                const parameters = `(${node.params.map((p) => source.getText(p)).join(", ")})`;
                const returnType = node.returnType
                  ? source.getText(node.returnType)
                  : "";
                const body = source.getText(node.body);
                if (
                  node.type === AST_NODE_TYPES.FunctionDeclaration &&
                  node.id
                ) {
                  return fixer.replaceText(
                    node,
                    `const ${node.id.name} = ${prefix}${typeParameters}${parameters}${returnType} => ${body};`,
                  );
                }
                if (
                  node.type === AST_NODE_TYPES.FunctionExpression &&
                  node.parent.type === AST_NODE_TYPES.VariableDeclarator
                ) {
                  return fixer.replaceText(
                    node,
                    `${prefix}${typeParameters}${parameters}${returnType} => ${body}`,
                  );
                }
                return null;
              },
            },
          ],
        });
      }
    },
  });
};

/**
 * Enforce shorthand boolean JSX attributes.
 * `<C disabled />` over `<C disabled={true} />`.
 */
const jsxBooleanValueRule: RuleFunction = (context, { ast }) => ({
  JSXAttribute(node) {
    const { value } = node;
    if (value?.type !== AST_NODE_TYPES.JSXExpressionContainer) return;
    const expression = ast.unwrap(value.expression);
    if (expression.type !== AST_NODE_TYPES.Literal || expression.value !== true)
      return;
    context.report({
      fix: (fixer) => fixer.removeRange([node.name.range[1], value.range[1]]),
      message: "Omit the value for boolean attributes.",
      node,
    });
  },
});

/**
 * Enforce shorthand fragment syntax.
 * `<>...</>` over `<Fragment>` or `<React.Fragment>`.
 */
const jsxFragmentsRule: RuleFunction = (context) => ({
  JSXOpeningElement(node) {
    const { name } = node;
    const isFragment =
      (name.type === AST_NODE_TYPES.JSXIdentifier &&
        name.name === "Fragment") ||
      (name.type === AST_NODE_TYPES.JSXMemberExpression &&
        name.object.type === AST_NODE_TYPES.JSXIdentifier &&
        name.object.name === "React" &&
        name.property.name === "Fragment");
    if (!isFragment || node.attributes.length > 0) return;
    const pattern =
      name.type === AST_NODE_TYPES.JSXMemberExpression
        ? "React.Fragment"
        : "Fragment";
    const closing = node.parent.closingElement;
    if (closing) {
      context.report({
        fix: (fixer) => [
          fixer.replaceText(node, "<>"),
          fixer.replaceText(closing, "</>"),
        ],
        message: `Use shorthand fragment syntax '<>...</>' instead of '<${pattern}>'.`,
        node,
      });
    } else {
      context.report({
        message: `Use shorthand fragment syntax '<>...</>' instead of '<${pattern}>'.`,
        node,
      });
    }
  },
});

function functionComponentDefinition(): RuleFunction {
  return functionComponentDefinitionRule;
}

function jsxBooleanValue(): RuleFunction {
  return jsxBooleanValueRule;
}

function jsxFragments(): RuleFunction {
  return jsxFragmentsRule;
}

const config: Linter.Config[] = [
  kit()
    .use(functionComponentDefinition)
    .use(jsxBooleanValue)
    .use(jsxFragments)
    .getConfig(),
];

export default config;
