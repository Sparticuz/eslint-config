import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    name: "sonarjs/recommended",

    files: [...javascriptFiles, ...typescriptFiles],
    ...sonarJSPlugin.configs.recommended,
  } as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/sonarjs.ts",

    files: [...javascriptFiles, ...typescriptFiles],
    rules: {
      /**
       * Disable in favor of @typescript-eslint/no-deprecated
       */
      "sonarjs/deprecation": "off",
      /**
       * This rule is dumb
       */
      "sonarjs/no-duplicate-string": "off",
      /**
       * Disable in favor of @typescript-eslint/no-unused-vars
       */
      "sonarjs/no-unused-vars": "off",
      /**
       * TO-DO's should just be warnings, not errors
       */
      "sonarjs/todo-tag": "warn",
    },
  },
);
