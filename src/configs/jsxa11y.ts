import type { Linter } from "eslint";

import jsxA11y from "eslint-plugin-jsx-a11y-x";

export default [
  // JSX Accessibility
  jsxA11y.configs.strict,
] as Linter.Config[];
