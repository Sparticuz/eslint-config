import type { Linter } from "eslint";

import js from "@eslint/js";
import globals from "globals";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./file-types.js";

export default [
  {
    ...js.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@eslint/js/recommended",
  },
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
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
