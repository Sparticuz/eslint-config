module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
    "plugin:prettier/recommended",
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
        "node/no-unpublished-require": 0,
      },
    },
    {
      // Typescript Override Block
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:node/recommended-module",
        "prettier",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      plugins: ["@typescript-eslint", "typescript-sort-keys"],
      rules: {
        // Make sure we don't require .ts and .tsx
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never",
            tsx: "never",
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        // Sort Typescript
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
      },
      settings: {
        "import/core-modules": ["aws-sdk"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          // user <root>/tsconfig.json
          typescript: {
            alwaysTryTypes: true,
          },
        },
        node: {
          allowModules: ["aws-sdk"],
          // Make sure we are looking for Typescript files as well
          tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "import",
    "node",
    "prettier",
    "promise",
    "security",
    "sonarjs",
    "unicorn",
  ],
  rules: {
    // disallow certain syntax forms, allows for-of
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
  },
};
