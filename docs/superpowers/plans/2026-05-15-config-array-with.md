# ConfigArray `with()` Pattern Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `with()` method to every exported config so consumers can override rules from plugins already registered in the shared config, without needing to install or import those plugins themselves.

**Architecture:** Introduce a `ConfigArray` wrapper class in `src/config-array.ts` that implements `Symbol.iterator` (preserving `...spread` compatibility) and a `with()` method that appends a new config object containing all plugins merged from the array plus the consumer's overrides. Every export (`base`, `react`, `import`, `json`, `css`, `markdown`, `tailwind`, `package-json`) is wrapped in `ConfigArray` before being exported.

**Tech Stack:** TypeScript, ESLint flat config (`Linter.Config[]`), no new runtime dependencies.

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `src/config-array.ts` | `ConfigArray` class with `Symbol.iterator` and `with()` |
| Modify | `src/base.ts` | Wrap export in `ConfigArray` |
| Modify | `src/react.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/import.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/json.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/css.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/markdown.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/tailwind.ts` | Wrap export in `ConfigArray` |
| Modify | `src/configs/package-json.ts` | Wrap export in `ConfigArray` |
| Modify | `README.md` | Document the `with()` usage pattern |

---

### Task 1: Create `ConfigArray` utility class

**Files:**
- Create: `src/config-array.ts`

- \[ \] **Step 1: Write the file**

```typescript
import type { Linter } from "eslint";

/**
 * A thin wrapper around a Linter.Config[] that adds a `with()` method.
 *
 * `with()` lets consumers override rules from plugins that are already
 * registered inside the shared config, without needing to re-install or
 * re-import those plugins.  ESLint v10 requires a plugin to be registered
 * in the same config object that references its rules; `with()` handles
 * that automatically by collecting every plugin from the wrapped array and
 * merging them into the appended override config object.
 *
 * The class implements Symbol.iterator so existing `...spread` usage
 * continues to work without any changes.
 *
 * @example
 * // Consumer eslint.config.js
 * import myConfig from "@sparticuz/eslint-config";
 *
 * export default [
 *   ...myConfig.with({
 *     rules: {
 *       "unicorn/no-null": "error",
 *       "@typescript-eslint/no-unused-vars": "error",
 *     },
 *   }),
 * ];
 */
export class ConfigArray {
  readonly #configs: Linter.Config[];

  constructor(configs: Linter.Config[]) {
    this.#configs = configs;
  }

  /** Merge all plugins from the wrapped config array into a single map. */
  #mergedPlugins(): NonNullable<Linter.Config["plugins"]> {
    const merged: NonNullable<Linter.Config["plugins"]> = {};
    for (const config of this.#configs) {
      if (config.plugins) {
        Object.assign(merged, config.plugins);
      }
    }
    return merged;
  }

  /**
   * Append one or more override config objects to this array.
   *
   * Every plugin already registered anywhere in the base config is
   * automatically merged into each override object so ESLint v10's
   * per-config-object plugin lookup works correctly.
   *
   * Returns a new ConfigArray (the original is not mutated), so calls
   * can be chained.
   */
  with(
    overrides: Linter.Config | Linter.Config[],
  ): ConfigArray {
    const plugins = this.#mergedPlugins();
    const overrideList = Array.isArray(overrides) ? overrides : [overrides];
    const merged = overrideList.map((override) => ({
      plugins,
      ...override,
    }));
    return new ConfigArray([...this.#configs, ...merged]);
  }

  /** Return the underlying array. */
  toArray(): Linter.Config[] {
    return [...this.#configs];
  }

  /** Spread support: `...myConfig` still works. */
  [Symbol.iterator](): Iterator<Linter.Config> {
    return this.#configs[Symbol.iterator]();
  }
}
```

- \[ \] **Step 2: Build to verify TypeScript compiles**

```bash
npm run build
```

Expected: no errors, `dist/` updated.

- \[ \] **Step 3: Commit**

```bash
git add src/config-array.ts
git commit -m "feat: add ConfigArray wrapper with with() method for consumer rule overrides"
```

---

### Task 2: Wrap the base config export

**Files:**
- Modify: `src/base.ts`

- \[ \] **Step 1: Update `src/base.ts`**

Replace the entire file with:

```typescript
import { defineConfig } from "eslint/config";

import arrayFunctionConfig from "./configs/array-function.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import eslintJSConfig from "./configs/eslint.js";
import {
  JAVASCRIPT_FILES,
  TYPESCRIPT_FILES,
  withFiles,
} from "./configs/file-types.js";
import nodeConfig from "./configs/n.js";
import noUnsanitizedConfig from "./configs/no-unsanitized.js";
import perfectionistConfig from "./configs/perfectionist.js";
import prettierConfig from "./configs/prettier.js";
import promiseConfig from "./configs/promise.js";
import regexpConfig from "./configs/regexp.js";
import securityConfig from "./configs/security.js";
import sonarJsConfig from "./configs/sonarjs.js";
import tseslintConfig from "./configs/tseslint.js";
import unicornConfig from "./configs/unicorn.js";
import vitestConfig from "./configs/vitest.js";
import { ConfigArray } from "./config-array.js";

const JS_TS_FILES = [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES];

export default new ConfigArray(
  defineConfig(
    ...withFiles(JS_TS_FILES, [
      ...eslintJSConfig,
      ...tseslintConfig,
      ...nodeConfig,
      ...eslintCommentsConfig,
      ...noUnsanitizedConfig,
      ...promiseConfig,
      ...unicornConfig,
      ...arrayFunctionConfig,
      ...regexpConfig,
      ...sonarJsConfig,
      ...securityConfig,
      ...perfectionistConfig,
      ...prettierConfig,
      ...vitestConfig,
    ]),
  ),
);
```

- \[ \] **Step 2: Build**

```bash
npm run build
```

Expected: no errors.

- \[ \] **Step 3: Commit**

```bash
git add src/base.ts
git commit -m "feat: wrap base config export in ConfigArray"
```

---

### Task 3: Wrap the react config export

**Files:**
- Modify: `src/react.ts`

- \[ \] **Step 1: Update `src/react.ts`**

Add the import and wrap the `defineConfig(...)` call:

```typescript
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import { ConfigArray } from "./config-array.js";
import { NEXT_JS_FILES } from "./configs/file-types.js";
import importConfig from "./configs/import.js";
import jsxA11yConfig from "./configs/jsxa11y.js";
import reactKitConfig from "./configs/react-kit.js";
import reactConfigs from "./configs/react.js";

const kitPlugin = reactKitConfig[0]?.plugins?.["@eslint-react/kit"];
if (!kitPlugin) throw new Error("@eslint-react/kit plugin not found in reactKitConfig");

export default new ConfigArray(
  defineConfig(
    ...reactConfigs,
    ...jsxA11yConfig,
    ...importConfig,
    ...reactKitConfig,

    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      name: "@sparticuz/eslint-config/react/browser-globals",
    },

    {
      name: "@sparticuz/eslint-config/next",
      plugins: {
        "@next/next": nextPlugin,
      },
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs["core-web-vitals"].rules,
      },
    },

    {
      name: "@sparticuz/eslint-config/react",
      plugins: {
        "@eslint-react/kit": kitPlugin,
        "@typescript-eslint": tseslint.plugin,
      },
      rules: {
        "@eslint-react/kit/function-component-definition": "warn",
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false } },
        ],
        "import-x/no-default-export": "warn",
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },

    {
      files: NEXT_JS_FILES,
      name: "@sparticuz/eslint-config/react/nextjs-overrides",
      plugins: {
        "@eslint-react/kit": kitPlugin,
      },
      rules: {
        "@eslint-react/kit/function-component-definition": "off",
        "import-x/no-default-export": "off",
      },
    },

    {
      files: ["*.config.ts", "*.config.js", "**/*.stories.*"],
      name: "@sparticuz/eslint-config/react/config-overrides",
      rules: {
        "import-x/no-default-export": "off",
      },
    },
  ),
);
```

- \[ \] **Step 2: Build**

```bash
npm run build
```

Expected: no errors.

- \[ \] **Step 3: Commit**

```bash
git add src/react.ts
git commit -m "feat: wrap react config export in ConfigArray"
```

---

### Task 4: Wrap the remaining sub-config exports

**Files:**
- Modify: `src/configs/import.ts`
- Modify: `src/configs/json.ts`
- Modify: `src/configs/css.ts`
- Modify: `src/configs/markdown.ts`
- Modify: `src/configs/tailwind.ts`
- Modify: `src/configs/package-json.ts`

- \[ \] **Step 1: Update `src/configs/import.ts`**

```typescript
import tsParser from "@typescript-eslint/parser";
import { importX } from "eslint-plugin-import-x";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
    },
    name: "@sparticuz/eslint-config/import.ts",
    plugins: importX.flatConfigs.recommended.plugins,
    rules: {
      "import-x/default": "off",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-unresolved": "off",
      "import-x/no-deprecated": "off",
      "import-x/order": "off",
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
]);
```

- \[ \] **Step 2: Update `src/configs/json.ts`**

```typescript
import json from "@eslint/json";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([
  {
    ...json.configs.recommended,
    files: ["**/*.json"],
    ignores: ["**/package-lock.json", "**/pnpm-lock.yaml"],
    language: "json/json",
    name: "@sparticuz/eslint-config/json",
  },
  {
    ...json.configs.recommended,
    files: [
      "**/*.jsonc",
      "**/.vscode/*.json",
      "**/tsconfig.json",
      "**/tsconfig.*.json",
    ],
    language: "json/jsonc",
    name: "@sparticuz/eslint-config/jsonc",
  },
]);
```

- \[ \] **Step 3: Update `src/configs/css.ts`**

```typescript
import css from "@eslint/css";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([
  {
    ...css.configs.recommended,
    files: ["**/*.css"],
    language: "css/css",
    name: "@sparticuz/eslint-config/css",
  },
]);
```

- \[ \] **Step 4: Update `src/configs/markdown.ts`**

```typescript
import markdown from "@eslint/markdown";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([...markdown.configs.recommended]);
```

- \[ \] **Step 5: Update `src/configs/tailwind.ts`**

```typescript
import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig({
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    name: "@sparticuz/eslint-config/tailwind",
    plugins: {
      "better-tailwindcss": tailwindPlugin,
    },
    rules: {
      ...tailwindPlugin.configs.recommended.rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "warn",
        { preferSingleLine: true },
      ],
      "better-tailwindcss/no-unknown-classes": "warn",
    },
  }),
);
```

- \[ \] **Step 6: Update `src/configs/package-json.ts`**

```typescript
import packageJson from "eslint-plugin-package-json";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig([
    packageJson.configs.recommended,
    packageJson.configs.stylistic,
  ]),
);
```

- \[ \] **Step 7: Build**

```bash
npm run build
```

Expected: no errors.

- \[ \] **Step 8: Commit**

```bash
git add src/configs/import.ts src/configs/json.ts src/configs/css.ts src/configs/markdown.ts src/configs/tailwind.ts src/configs/package-json.ts
git commit -m "feat: wrap all sub-config exports in ConfigArray"
```

---

### Task 5: Verify spread backward compatibility and `with()` work in the repo's own eslint.config.js

**Files:**
- Read: `eslint.config.js`

- \[ \] **Step 1: Read the existing `eslint.config.js`**

```bash
cat eslint.config.js
```

- \[ \] **Step 2: Verify it still lints cleanly (spread still works)**

```bash
npm run lint
```

Expected: exits 0. This confirms `...myConfig` spread still works.

- \[ \] **Step 3: Smoke-test `with()` by temporarily appending an override**

Edit `eslint.config.js` momentarily to add:

```js
...myConfig.with({ rules: { "unicorn/no-null": "off" } }),
```

Then run:

```bash
npm run lint
```

Expected: exits 0 (no "plugin not registered" error). Revert the temporary change afterward.

- \[ \] **Step 4: Commit lint verification (no file changes needed if already clean)**

```bash
git commit --allow-empty -m "test: verify spread compat and with() smoke test pass"
```

---

### Task 6: Update README with `with()` documentation

**Files:**
- Modify: `README.md`

- \[ \] **Step 1: Add a `Overriding Rules` section to `README.md`**

Insert the following section after the "Available Exports" table (after line 24 in the current file) and before the "Example package.json" section:

```markdown
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

- \[ \] **Step 2: Build and lint to confirm no regressions**

```bash
npm run build && npm run lint
```

Expected: both exit 0.

- \[ \] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: document with() pattern for consumer rule overrides"
```

---

### Task 7: Bump version

- \[ \] **Step 1: Bump minor version**

```bash
npm version minor
```

Expected: version becomes `11.3.0` (or whatever the next minor is), `package.json` and `package-lock.json` updated, a git tag created.

- \[ \] **Step 2: Verify build still passes after version bump**

```bash
npm run build
```

Expected: no errors.
