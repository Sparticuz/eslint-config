import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint"; // Pending v8+

export default tseslint.config(js.configs.recommended, {
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

    "sort-keys": "off",
  },
});
