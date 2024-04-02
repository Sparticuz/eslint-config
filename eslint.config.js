// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import securityPlugin from "eslint-plugin-security";
import nodePlugin from "eslint-plugin-n";
import unicornPlugin from "eslint-plugin-unicorn";
import arrayFuncPlugin from "eslint-plugin-array-func";
import * as regexpPlugin from "eslint-plugin-regexp";
// @ts-ignore Missing types?
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

/**
 * Plugins to re-implement
 * "eslint-plugin-deprecation": https://github.com/gund/eslint-plugin-deprecation/pull/79,
 * "eslint-plugin-eslint-comments": https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/200
 * "eslint-plugin-no-unsanitized": https://github.com/mozilla/eslint-plugin-no-unsanitized/issues/234,
 * "eslint-plugin-promise": https://github.com/eslint-community/eslint-plugin-promise/issues/449
 * "eslint-plugin-sonarjs": https://github.com/SonarSource/eslint-plugin-sonarjs/issues/454
 *
 * Keep? Ava, Import
 */

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  nodePlugin.configs["flat/recommended"],
  // @ts-ignore
  unicornPlugin.configs["flat/recommended"],
  arrayFuncPlugin.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  securityPlugin.configs.recommended,
  perfectionistNatural,
  prettierConfig,
  {
    ignores: [
      // Ignore my dist folders so I don't lint transpiled files
      "dist/**/*",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        project: true,
        // @ts-ignore 20.11 +
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        // user <root>/tsconfig.json
        node: true,
        typescript: true,
      },
      node: {
        // Allow AWS-SDK as an Unpublished Import
        allowModules: ["aws-sdk"],
        // Make sure we are looking for Typescript files as well
        tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
      },
    },
    rules: {
      // Disable import/extensions because Typescript handles this now
      // "import/extensions": "off",
      // Disable @typescript-eslint/member-ordering because of perfectionist
      "@typescript-eslint/member-ordering": "off",
      // Typescript eslint has it's own @typescript-eslint/no-shadow rule
      "no-shadow": "off",
      // Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
      "array-func/prefer-array-from": "off",
      // Dot notation is disabled via typescript, so disable it here
      // https://typescript-eslint.io/rules/dot-notation/
      "dot-notation": "off",
      // "eslint-comments/disable-enable-pair": "off",
      // Don't prefer the default export
      // "import/prefer-default-export": ["off"],
      // Await shouldn't be used it a loop, but sometimes it needs to be, just warn
      // "no-await-in-loop": ["warn"],
      // disallow certain syntax forms, allows for-of
      // http://eslint.org/docs/rules/no-restricted-syntax
      "no-restricted-syntax": [
        "error",
        "ForInStatement",
        "LabeledStatement",
        "WithStatement",
      ],
      "no-unused-vars": ["warn"],
      // Disable @typescript-eslint/member-ordering because of perfectionist
      "sort-keys": "off",
      // Disable switch curly braces
      "unicorn/switch-case-braces": "off",
    },
  },
  {
    files: ["tests/**/*"],
    rules: {
      // Don't require items to be published for tests
      "n/no-unpublished-import": "off",
    },
  },
);
