// @ts-expect-error There are no types, Supports es9 on upgrade to @9
import js from "@eslint/js";
// @ts-expect-error There are no types, should be es9 compatible because there is no plugin
import prettierConfig from "eslint-config-prettier";
// @ts-expect-error There are no types, no details about es9
import arrayFuncPlugin from "eslint-plugin-array-func";
import nodePlugin from "eslint-plugin-n"; // Supports es9 v17+
// @ts-expect-error There are no types, No support for es9 yet, https://github.com/azat-io/eslint-plugin-perfectionist/issues/90
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
// @ts-expect-error There are no types, Supports es9
import promisePlugin from "eslint-plugin-promise";
import * as regexpPlugin from "eslint-plugin-regexp"; // Pending 2.6.0+
// @ts-expect-error There are no types, Supports es9
import securityPlugin from "eslint-plugin-security";
// @ts-expect-error There are no types, supports es9
import unicornPlugin from "eslint-plugin-unicorn";
import vitest from "eslint-plugin-vitest"; //supports es9 since 0.2.8
import globals from "globals";
// Does not support eslint 9, pending v8+
import tseslint from "typescript-eslint";

/**
 *  Plugins to re-implement when they support Flat Config
 * "eslint-plugin-deprecation": https://github.com/gund/eslint-plugin-deprecation/pull/79,
 * "eslint-plugin-eslint-comments": https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/200
 * "eslint-plugin-no-unsanitized": https://github.com/mozilla/eslint-plugin-no-unsanitized/issues/234,
 * "eslint-plugin-promise": https://github.com/eslint-community/eslint-plugin-promise/issues/449
 * "eslint-plugin-sonarjs": https://github.com/SonarSource/eslint-plugin-sonarjs/issues/454
 *
 *  Import will eventually come back
 */

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  nodePlugin.configs["flat/recommended"],
  promisePlugin.configs["flat/recommended"],
  unicornPlugin.configs["flat/recommended"],
  arrayFuncPlugin.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
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
      // Disable import/extensions because Typescript handles this now
      // "import/extensions": "off",
      /* Disable @typescript-eslint/member-ordering because of perfectionist */
      "@typescript-eslint/member-ordering": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      /* Array Func prefers array.from, however, Unicorn prefers spread. Spread is better */
      "array-func/prefer-array-from": "off",
      /* Dot notation is disabled via typescript, so disable it here */
      // https://typescript-eslint.io/rules/dot-notation/
      "dot-notation": "off",
      // "eslint-comments/disable-enable-pair": "off",
      // Don't prefer the default export
      // "import/prefer-default-export": ["off"],
      /* Typescript eslint has it's own @typescript-eslint/no-shadow rule */
      "no-shadow": "off",
      /* Disable no-unused-vars because of @typescript-eslint/no-unused-vars */
      "no-unused-vars": "off",
      /* Make sure nulls are last in types */
      "perfectionist/sort-union-types": [
        "error",
        {
          "nullable-last": true,
        },
      ],
      /* Disable @typescript-eslint/member-ordering because of perfectionist */
      "sort-keys": "off",
      /* I want to use named imports for path */
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
      /* For database stuff, I need nulls */
      "unicorn/no-null": "off",
      /* Disable switch curly braces */
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
      /* Don't require items to be published for tests */
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
