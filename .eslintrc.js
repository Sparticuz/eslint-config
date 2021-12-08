module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:array-func/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "plugin:switch-case/recommended",
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
        "node/no-unpublished-require": "off",
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
        "plugin:prettier/recommended",
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
        // Typescript eslint has it's own @typescript-eslint/no-shadow rule
        "no-shadow": "off",
        // Sort Typescript
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
      },
      settings: {
        // Allow AWS-SDK as an Unpublished Import
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
          // Allow AWS-SDK as an Unpublished Import
          allowModules: ["aws-sdk"],
          // Make sure we are looking for Typescript files as well
          tryExtensions: [".js", ".json", ".node", ".ts", ".d.ts"],
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "array-func",
    "import",
    "node",
    "prettier",
    "promise",
    "security",
    "sonarjs",
    "switch-case",
    "unicorn",
  ],
  rules: {
    // Array Func prefers array.from, however, Unicorn prefers spread
    "array-func/prefer-array-from": "off",
    // The Ecosystem is moving to requiring extension on require()
    "import/extensions": "off",
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
    // Not ready for ESM until AWS Lambda Node supports modules
    "unicorn/prefer-module": "off",
    // Not ready until Typescript and DefinitelyTyped update their support
    "unicorn/prefer-node-protocol": "off",
  },
};
