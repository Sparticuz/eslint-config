# eslint-config

My eslint config

I use this on projects that I develop.

## Note

This project uses dependencies instead of peerDependencies. This has been debated here https://github.com/eslint/eslint/issues/3458. I like packaging the plugins with my eslint-config instead of cluttering the package's devDepencencies all up. This also means you will need to add https://www.npmjs.com/package/@rushstack/eslint-patch to the package's .eslintrc.js file. This will change when ESLint Flat Config is stable.

## Install

`npm install --save-dev @sparticuz/eslint-config`

## Example .eslintrc.js

```js
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@sparticuz/eslint-config"],
};
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
  importOrderTypeScriptVersion: "5.1.3",
  // eslint-disable-next-line n/no-unpublished-require
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
  trailingComma: "all",
};
module.exports = config;
```
