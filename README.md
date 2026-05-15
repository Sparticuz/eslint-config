# eslint-config

I use this on projects that I develop.

Included in the readme is also Typescript, Prettier, Vitest configs for bootstrapping new projects.

## Install

```sh
npm install --save-dev @sparticuz/eslint-config typescript-eslint typescript prettier vitest @tsconfig/node24 @tsconfig/strictest
```

## Available Exports

| Export                                  | Description                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| `@sparticuz/eslint-config`              | Base config: ESLint, TypeScript, Node, Unicorn, Perfectionist, Prettier, etc. |
| `@sparticuz/eslint-config/import`       | Import rules (standalone for non-React projects)                              |
| `@sparticuz/eslint-config/react`        | React + Next.js + JSX a11y + React Hooks + import rules                       |
| `@sparticuz/eslint-config/tailwind`     | Tailwind CSS linting via eslint-plugin-better-tailwindcss                     |
| `@sparticuz/eslint-config/json`         | JSON/JSONC linting via @eslint/json                                           |
| `@sparticuz/eslint-config/markdown`     | Markdown linting via @eslint/markdown                                         |
| `@sparticuz/eslint-config/css`          | CSS linting via @eslint/css                                                   |
| `@sparticuz/eslint-config/package-json` | package.json linting via eslint-plugin-package-json                           |

## Overriding Rules

Because ESLint v10 requires a plugin to be registered in the same config object that references its rules, you cannot override plugin rules by appending a plain config object after spreading this package's exports.

All exports expose a `with()` method that handles this for you. It appends a new config object with all plugins already merged in, so you never need to install or import plugins that are already bundled here.

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  { ignores: ["dist"] },
  ...myConfig.with({
    rules: {
      // Override rules from any bundled plugin — no extra imports needed
      "unicorn/no-null": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  }),
);
```

You can also scope overrides to specific files:

```js
...myConfig.with({
  files: ["src/db/**/*.ts"],
  rules: {
    "unicorn/no-null": "off",
  },
}),
```

Pass an array to `with()` to append multiple override objects at once:

```js
...myConfig.with([
  { rules: { "unicorn/no-null": "error" } },
  { files: ["**/*.test.ts"], rules: { "unicorn/no-null": "off" } },
]),
```

`with()` returns a new `ConfigArray`, so calls can be chained:

```js
...myConfig
  .with({ rules: { "unicorn/no-null": "error" } })
  .with({ files: ["src/db/**"], rules: { "unicorn/no-null": "off" } }),
```

Existing `...spread` usage continues to work unchanged for consumers who don't need overrides.

## Example package.json

```json
"scripts": {
  "build": "rm -rf dist/** && tsc -p tsconfig.build.json",
  "lint": "eslint",
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

### For Next.js / React projects

The `/react` export includes React, React Hooks, JSX accessibility, Next.js, and import rules — all in one:

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import reactConfig from "@sparticuz/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist", ".next"],
  },
  ...myConfig,
  ...reactConfig,
);
```

The React config automatically:

- Enables `import/no-default-export` as a warning
- Relaxes it for Next.js convention files (`page.tsx`, `layout.tsx`, `route.ts`, etc.) and config/story files
- Sets `react/function-component-definition` to prefer arrow functions (function declarations for Next.js files)
- Configures `@typescript-eslint/no-misused-promises` for JSX attributes

### With Tailwind CSS

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import reactConfig from "@sparticuz/eslint-config/react";
import tailwindConfig from "@sparticuz/eslint-config/tailwind";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist", ".next"],
  },
  ...myConfig,
  ...reactConfig,
  ...tailwindConfig,
);
```

### For non-React projects that need import rules

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

### With JSON, Markdown, CSS, and package.json linting

```js
// @ts-check
import myConfig from "@sparticuz/eslint-config";
import cssConfig from "@sparticuz/eslint-config/css";
import jsonConfig from "@sparticuz/eslint-config/json";
import markdownConfig from "@sparticuz/eslint-config/markdown";
import packageJsonConfig from "@sparticuz/eslint-config/package-json";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist"],
  },
  ...myConfig,
  ...jsonConfig,
  ...markdownConfig,
  ...cssConfig,
  ...packageJsonConfig,
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
  "extends": ["@tsconfig/node24/tsconfig", "@tsconfig/strictest/tsconfig"],
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
