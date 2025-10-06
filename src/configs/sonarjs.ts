import type { Linter } from "eslint";

import sonarJSPlugin from "eslint-plugin-sonarjs";

export default [
  {
    name: "sonarjs/recommended",
    ...sonarJSPlugin.configs.recommended,
  },
  {
    name: "@sparticuz/eslint-config/sonarjs.ts",
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
] satisfies Linter.Config[];
