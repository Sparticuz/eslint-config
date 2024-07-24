import arrayFuncPlugin from "eslint-plugin-array-func";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  arrayFuncPlugin.configs.recommended as ConfigWithExtends,
  {
    rules: {
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
    },
  },
);
