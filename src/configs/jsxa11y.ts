import type { Linter } from "eslint";

import jsxA11y from "eslint-plugin-jsx-a11y-x";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...jsxA11y.configs.strict,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
] as Linter.Config[];
