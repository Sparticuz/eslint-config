import type { Linter } from "eslint";

import prettierConfig from "eslint-config-prettier/flat";

export default [
  {
    ...prettierConfig,
  },
] satisfies Linter.Config[];
