module.exports = {
  env: {
    es6: true,
    es2017: true,
    node: true,
  },
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
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2019,
    project: "tsconfig.json",
    sourceType: "module",
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
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // Allow aws-sdk to exist in optionalDependencies and be used in production
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: true,
      },
    ],
    // disallow certain syntax forms, allows for-of
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    // Typescript uses Imports for transpiling
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        natural: true,
      },
    ],
    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true,
      },
    },
    node: {
      tryExtensions: [".js", ".json", ".ts"],
    },
  },
};
