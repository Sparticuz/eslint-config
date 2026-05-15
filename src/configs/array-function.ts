import type { Linter } from "eslint";

import arrayFuncPlugin from "eslint-plugin-array-func";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./file-types.js";

export default [
  { ...arrayFuncPlugin.configs.recommended, files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES] },
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/array-function.ts",
    plugins: arrayFuncPlugin.configs.recommended.plugins,
    rules: {
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
    },
  },
] as Linter.Config[];
