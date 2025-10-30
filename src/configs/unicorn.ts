import type { Linter } from "eslint";

import unicornPlugin from "eslint-plugin-unicorn";

export default [
  unicornPlugin.configs.recommended,
  {
    name: "@sparticuz/eslint-config/unicorn.ts",
    rules: {
      /**
       * Use my to-do style comments
       */
      "unicorn/expiring-todo-comments": [
        "warn",
        {
          allowWarningComments: false,
          terms: ["@todo"],
        },
      ],
      /**
       * I want to use named imports for path
       */
      "unicorn/import-style": [
        "error",
        {
          styles: {
            "node:path": {
              named: true,
            },
          },
        },
      ],
      /**
       * For database stuff, I need nulls
       */
      "unicorn/no-null": "off",
      /**
       * Disable switch curly braces
       */
      "unicorn/switch-case-braces": "off",
    },
  },
] as Linter.Config[];
