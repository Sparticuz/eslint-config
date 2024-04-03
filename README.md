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
const config = {
  trailingComma: "all",
};
module.exports = config;
```
