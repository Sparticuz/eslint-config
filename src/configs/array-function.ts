import arrayFuncPlugin from "eslint-plugin-array-func";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    ...(arrayFuncPlugin.configs.recommended as ConfigWithExtends),
    files: [...javascriptFiles, typescriptFiles],
  },
  {
    name: "@sparticuz/eslint-config/array-function.ts",

    files: [...javascriptFiles, typescriptFiles],
    rules: {
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
    },
  },
);
