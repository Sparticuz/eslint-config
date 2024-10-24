import js from "@eslint/js";
import globals from "globals";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  {
    name: "@eslint/js/recommended",
    ...js.configs.recommended,
  } as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/eslint.ts",

    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: true,
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
       * Disable sort-keys because of `perfectionist`
       */
      "sort-keys": "off",
    },
  },
);
