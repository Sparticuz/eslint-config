# eslint-config

I use this on projects that I develop.

Included in the readme is also Typescript, Prettier, Vitest configs for bootstrapping new projects.

## Install

`npm install --save-dev @sparticuz/eslint-config typescript-eslint typescript prettier vitest @tsconfig/node22 @tsconfig/strictest`

## Example package.json

```json
"scripts": {
  "build": "rm -rf dist/** && tsc -p tsconfig.build.json",
  "lint": "eslint \"**/*.?(c|m)[jt]s?(x)\"",
  "test": "vitest run --coverage"
},
```

## Example eslint.config.js

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist"],
  },
  ...myConfig,
);
```

### For Next.js projects

Since Next.js ESLint rules include jsx-a11y and import functionality, you can exclude the import rules and add jsx-a11y back if needed:

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist"],
  },
  ...myConfig,
  // Add import config if you want import rules in addition to Next.js built-in ones
  // ...importConfig,
);
```

### For non-Next.js projects that need import rules

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import importConfig from "@sparticuz/eslint-config/import";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist"],
  },
  ...myConfig,
  ...importConfig,
);
```

## Example prettier.config.js

```js
/** @type {import("prettier").Config} */
export const config = {
  trailingComma: "all",
};
export default config;
```

## Example Typescript config

### tsconfig.json

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Base Default TSConfig",
  "extends": ["@tsconfig/node22/tsconfig", "@tsconfig/strictest/tsconfig"],
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "exactOptionalPropertyTypes": false,
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "noUnusedLocals": false,
    "outDir": "dist",
    "resolveJsonModule": true,
    "sourceMap": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src", "test", "vitest.config.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### tsconfig.build.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "removeComments": true,
    "sourceMap": false
  },
  "exclude": ["test"]
}
```

## Example vitest.config.ts

```ts
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["json", "json-summary", "text"],
      reportOnFailure: true,
    },
    env: loadEnv("", process.cwd(), ""),
  },
});
```
