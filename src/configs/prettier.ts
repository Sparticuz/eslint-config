import type { Linter } from "eslint";

import prettierConfig from "eslint-config-prettier/flat";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...prettierConfig,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
] satisfies Linter.Config[];
