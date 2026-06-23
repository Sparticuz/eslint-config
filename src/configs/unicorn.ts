import type { Config } from "eslint/config";

import unicornPlugin from "eslint-plugin-unicorn";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...unicornPlugin.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/unicorn.ts",
    plugins: unicornPlugin.configs.recommended.plugins,
    rules: {
      /**
       * Disable because perfectionsit plugin already enforces this
       */
      "unicorn/consistent-class-member-order": "off",
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
            path: {
              named: true,
            },
          },
        },
      ],
      /**
       * No way I'm using this one, lol
       */
      "unicorn/max-nested-calls": "off",
      /**
       * Add some ones I care about
       */
      "unicorn/name-replacements": [
        "warn",
        {
          allowList: {
            e18e: true,
          },
          replacements: {
            env: false,
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
] as Config[];
