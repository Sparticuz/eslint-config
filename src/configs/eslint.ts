import type { Linter } from "eslint";

import js from "@eslint/js";
import globals from "globals";

export default [
  {
    name: "@eslint/js/recommended",
    ...js.configs.recommended,
  },
  {
    name: "@sparticuz/eslint-config/eslint.ts",

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
    rules: {
      /**
       * Dot notation is disabled via typescript, so disable it here
       * https://typescript-eslint.io/rules/dot-notation/
       */
      "dot-notation": "off",
      /**
       * Typescript eslint has it's own `@typescript-eslint/no-shadow` rule.
       * Disable the eslint rule
       */
      "no-shadow": "off",
      /**
       * Disable no-unused-vars because of `@typescript-eslint/no-unused-vars`
       */
      "no-unused-vars": "off",
      /**
       * Disable sort-imports because of `perfectionist/sort-named-imports`
       */
      "sort-imports": "off",
      /**
       * Disable sort-keys because of `perfectionist/sort-objects`
       */
      "sort-keys": "off",
    },
  },
] satisfies Linter.Config[];
