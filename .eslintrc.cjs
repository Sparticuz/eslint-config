/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    es2022: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:n/recommended",
    "plugin:unicorn/recommended",
    "plugin:array-func/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "plugin:switch-case/recommended",
    "plugin:eslint-comments/recommended",
    "prettier",
  ],
  // Ignore my dist folders so I don't lint transpiled files
  ignorePatterns: "dist/**/*",
  overrides: [
    {
      // Test Javascript Files Override Block
      extends: ["plugin:ava/recommended"],
      files: ["test/**/*.js"],
      plugins: ["ava"],
      rules: {
        "n/no-unpublished-require": "off",
      },
    },
    {
      // Typescript Override Block
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:n/recommended-module",
        "prettier",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      plugins: ["@typescript-eslint", "typescript-sort-keys"],
      rules: {
        // Disable import/extensions because Typescript handles this now
        "import/extensions": "off",
        // Typescript eslint has it's own @typescript-eslint/no-shadow rule
        "no-shadow": "off",
        // Sort Typescript
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
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
    },
    {
      // Typescript TEST FILES Override Block
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:n/recommended-module",
        "plugin:ava/recommended",
        "prettier",
      ],
      files: ["test/**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      plugins: ["@typescript-eslint", "typescript-sort-keys", "ava"],
      rules: {
        // Disable import/extensions because Typescript handles this now
        "import/extensions": "off",
        // Don't require items to be published for tests
        "n/no-unpublished-import": "off",
        // Typescript eslint has it's own @typescript-eslint/no-shadow rule
        "no-shadow": "off",
        // Sort Typescript
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
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
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: [
    "array-func",
    "import",
    "n",
    "promise",
    "security",
    "sonarjs",
    "switch-case",
    "unicorn",
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // Array Func prefers array.from, however, Unicorn prefers spread. Spread is better
    "array-func/prefer-array-from": "off",
    // Dot notation is disabled via typescript, so disable it here
    "dot-notation": "off",
    "eslint-comments/disable-enable-pair": "off",
    // Don't prefer the default export
    "import/prefer-default-export": ["off"],
    // Await shouldn't be used it a loop, but sometimes it needs to be, just warn
    "no-await-in-loop": ["warn"],
    // disallow certain syntax forms, allows for-of
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-unused-vars": ["warn"],
    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
    // Disable switch curly braces
    "unicorn/switch-case-braces": "off",
  },
};
