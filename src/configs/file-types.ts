import type { Linter } from "eslint";

export const JAVASCRIPT_FILES = [
  "**/*.js",
  "**/*.jsx",
  "**/*.cjs",
  "**/*.cjsx",
  "**/*.mjs",
  "**/*.mjsx",
  "eslint.config.js",
  "vitest.config.js",
];
export const TYPESCRIPT_FILES = [
  "**/*.ts",
  "**/*.tsx",
  "**/*.cts",
  "**/*.ctsx",
  "**/*.mts",
  "**/*.mtsx",
  "**/*.d.ts",
  "eslint.config.ts",
  "vitest.config.ts",
];
export const TEST_FILES = [
  "**/tests/**",
  "**/test/**",
  "vitest.config.ts",
  "**/*.test.*",
];
export const JSON_FILES = ["**/*.json", "**/*.jsonc"];
export const NEXT_JS_FILES = [
  "**/page.tsx",
  "**/layout.tsx",
  "**/loading.tsx",
  "**/error.tsx",
  "**/not-found.tsx",
  "**/route.ts",
  "**/default.tsx",
  "**/template.tsx",
  "**/opengraph-image.tsx",
  "**/icon.tsx",
  "**/apple-icon.tsx",
  "**/manifest.ts",
  "**/sitemap.ts",
  "**/robots.ts",
  "**/middleware.ts",
];

/**
 * Adds a `files` glob to every config object in an array.
 * Use this instead of `extends` + `files` to scope a set of configs
 * to specific file patterns without relying on the `extends` key.
 */
export function withFiles(
  files: string[],
  configs: Linter.Config[],
): Linter.Config[] {
  return configs.map((config) => ({ ...config, files }));
}
