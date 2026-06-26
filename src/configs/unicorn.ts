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
       * I can't make a named arrow function an inline default export
       */
      "unicorn/default-export-style": [
        "error",
        {
          functions: "separate",
        },
      ],
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
       * Disable the check on directories, when using nextjs, folders can't have dashes in them
       */
      "unicorn/filename-case": [
        "error",
        {
          checkDirectories: false,
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
            args: false,
            env: false,
            fn: false,
            lib: false,
            param: false,
            params: false,
            prev: false,
            prop: false,
            props: false,
            ref: false,
            refs: false,
          },
        },
      ],
      /**
       * e18e/prefer-array-fill is more precise
       */
      "unicorn/no-array-from-fill": "off",
      /**
       * This is causing alot of false positives
       */
      "unicorn/no-declarations-before-early-exit": "off",
      /**
       * For database stuff, I need nulls
       */
      "unicorn/no-null": "off",
      /**
       * I find it better to be explicit with undefined
       */
      "unicorn/no-useless-undefined": "off",
      /**
       * This conflicts with prettier and I can't change prettier's behavior, so I have to disable this
       */
      "unicorn/number-literal-case": [
        "error",
        {
          hexadecimalValue: "lowercase",
        },
      ],
      /**
       * I don't really like this, I prefer using the full function title in the ternary
       */
      "unicorn/prefer-minimal-ternary": "off",
      /**
       * Disable switch curly braces
       */
      "unicorn/switch-case-braces": "off",
    },
  },
] as Config[];
