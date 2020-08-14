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
    "prettier",
    "plugin:prettier/recommended",
  ],
  // Ignore my dist folders so I don't lint transpiled files
  ignorePatterns: "dist/**/*",
  overrides: [
    {
      // Test Javascript Files Override Block
      files: ["**/tests/*.js"],
      rules: {
        "node/no-unpublished-require": 0,
      },
    },
    {
      // Typescript Override Block
      extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:promise/recommended",
        "plugin:node/recommended",
        "plugin:unicorn/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint-parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      plugins: [
        "@typescript-eslint",
        "typescript-sort-keys",
        "import",
        "node",
        "prettier",
        "promise",
        "unicorn",
      ],
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
        // Typescript uses Imports for transpiling
        "node/no-unsupported-features/es-syntax": [
          "error",
          {
            ignores: ["modules"],
          },
        ],
      },
      settings: {
        node: {
          tryExtensions: [".ts"],
        },
      },
    },
  ],
  parser: "esprima",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["import", "node", "prettier", "promise", "unicorn"],
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
