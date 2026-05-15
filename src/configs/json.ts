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
