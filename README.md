# eslint-config

My eslint config

I use this on projects that I develop.

## Install

`npm install --save-dev @sparticuz/eslint-config typescript-eslint`

## Example eslint.config.js

```js
// @ts-check

import myConfig from "@sparticuz/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...myConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true
      }
    }
  }
);
```

## Example prettier.config.cjs

This is my prettier.config.cjs file. Requires `npm install --save-dev prettier @ianvs/prettier-plugin-sort-imports`

```js
/** @type {import("prettier").Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  importOrder: [
    "",
    "<BUILTIN_MODULES>",
    "",
    "react",
    "",
    "^(@dazser|@sparticuz)/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[.]",
    "",
    ".json$",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "importAssertions",
    "jsx",
    "typescript",
  ],
  importOrderTypeScriptVersion: "5.3.3",
  // eslint-disable-next-line n/no-unpublished-require
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
  trailingComma: "all",
};
module.exports = config;
```
