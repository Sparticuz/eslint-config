/* eslint-disable sonarjs/no-duplicate-string */
// @ts-expect-error There are no types, Supports es9 on upgrade to @9
import js from "@eslint/js";
// @ts-expect-error There are no types, should be es9 compatible because there is no plugin
import prettierConfig from "eslint-config-prettier";
// @ts-expect-error There are no types, no details about es9
import arrayFuncPlugin from "eslint-plugin-array-func";
import nodePlugin from "eslint-plugin-n"; // Supports es9 v17+
// @ts-expect-error There are no types, No support for es9 yet, https://github.com/azat-io/eslint-plugin-perfectionist/pull/113
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
// @ts-expect-error There are no types, Supports es9
import promisePlugin from "eslint-plugin-promise";
import * as regexpPlugin from "eslint-plugin-regexp"; // Pending 2.6.0+
// @ts-expect-error There are no types, Supports es9
import securityPlugin from "eslint-plugin-security";
// @ts-expect-error There are no types, supports es9
import unicornPlugin from "eslint-plugin-unicorn";
import vitest from "eslint-plugin-vitest"; //supports es9 since 0.2.8
// @ts-expect-error There are no types
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import sonarJSPlugin from "eslint-plugin-sonarjs";
import globals from "globals";
import tseslint from "typescript-eslint"; // Pending v8+
/**
 *  Plugins to re-implement when they support Flat Config
 * "eslint-plugin-deprecation": https://github.com/gund/eslint-plugin-deprecation/pull/79,
 * "eslint-plugin-no-unsanitized": https://github.com/mozilla/eslint-plugin-no-unsanitized/issues/234,
 *
 *  Import will eventually come back
 */

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  nodePlugin.configs["flat/recommended"],
  comments.recommended,
  promisePlugin.configs["flat/recommended"],
  unicornPlugin.configs["flat/recommended"],
  arrayFuncPlugin.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  sonarJSPlugin.configs.recommended,
  securityPlugin.configs.recommended,
  perfectionistNatural,
  prettierConfig,
  {
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
       * The allowWholeFile option lets you allow disabling rules for the entire file while
       * still catching "open" eslint-disable directives in the middle of a file.
       */
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
      /**
       * Disable import/extensions because Typescript handles this now
       */
      // "import/extensions": "off",
      /**
       * Disable `@typescript-eslint/member-ordering` because of perfectionist
       */
      "@typescript-eslint/member-ordering": "off",
      /**
       * Set `@typescript-eslint/no-unused-vars` to just warn
       */
      "@typescript-eslint/no-unused-vars": "warn",
      /**
       * Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
       */
      "array-func/prefer-array-from": "off",
      /**
       * Dot notation is disabled via typescript, so disable it here
       * https://typescript-eslint.io/rules/dot-notation/
       */
      "dot-notation": "off",
      /**
       * Don't prefer the default export
       */
      // "import/prefer-default-export": ["off"],
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
       * Reset sorting by a new line
       */
      "perfectionist/sort-objects": [
        "error",
        { "partition-by-new-line": true },
      ],
      /**
       * Make sure nulls are last in types
       */
      "perfectionist/sort-union-types": ["error", { "nullable-last": true }],
      /**
       * Disable `@typescript-eslint/member-ordering` because of perfectionist
       */
      "sort-keys": "off",
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
    settings: {
      /*
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        // user <root>/tsconfig.json
        node: true,
        typescript: true,
      },
      */
      node: {
        // Make sure we are looking for Typescript files as well
        tryExtensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".ts",
          ".tsx",
          ".json",
          ".d.ts",
        ],
      },
    },
  },
  {
    extends: [vitest.configs.recommended],
    files: ["tests/**", "test/**"],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      /**
       * Don't require items to be published for tests
       */
      "n/no-unpublished-import": "off",
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
  {
    // Disable typechecking for Javascript files
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js"],
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["eslint.config.js", "vitest.config.ts"],
    rules: {
      // Everything should be included in @sparticuz/eslint-config's dependencies.
      "n/no-unpublished-import": "off",
    },
  },
);
