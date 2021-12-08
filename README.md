# eslint-config
My eslint config

I use this on projects that I develop.

## Note
This project uses dependencies instead of peerDependencies. This has been debated here https://github.com/eslint/eslint/issues/3458. I like packaging the plugins with my eslint-config instead of cluttering the package's devDepencencies all up. This also means you will need to add https://www.npmjs.com/package/@rushstack/eslint-patch to the package's .eslintrc.js file.

## Install
`npm install --save-dev @sparticuz/eslint-config`

## Example .eslintrc.js
```js
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@sparticuz/eslint-config"
  ]
}
```
