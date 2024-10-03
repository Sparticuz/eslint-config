import arrayFuncPlugin from "eslint-plugin-array-func";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  arrayFuncPlugin.configs.recommended as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/array-function.ts",
    rules: {
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
    },
  },
);
