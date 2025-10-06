import type { Linter } from "eslint";

import arrayFuncPlugin from "eslint-plugin-array-func";

export default [
  arrayFuncPlugin.configs.recommended,
  {
    name: "@sparticuz/eslint-config/array-function.ts",
    rules: {
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
    },
  },
] satisfies Linter.Config[];
