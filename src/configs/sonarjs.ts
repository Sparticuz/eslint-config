import type { Linter } from "eslint";

import sonarJSPlugin from "eslint-plugin-sonarjs";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...sonarJSPlugin.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "sonarjs/recommended",
  },
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/sonarjs.ts",
    plugins: sonarJSPlugin.configs.recommended.plugins,
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
       * Use @unicorn/expiring-todo-comments
       */
      "sonarjs/todo-tag": "off",
    },
  },
] as Linter.Config[];
