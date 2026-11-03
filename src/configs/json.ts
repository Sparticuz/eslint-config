import json from "@eslint/json";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig(
    {
      extends: [json.configs.recommended, unicorn.configs["recommended-json"]],
      files: ["**/*.json"],
      ignores: ["**/package-lock.json"],
      language: "json/json",
      name: "@sparticuz/eslint-config/json",
    },
    {
      extends: [json.configs.recommended, unicorn.configs["recommended-json"]],
      files: [
        "**/*.jsonc",
        "**/.vscode/*.json",
        "**/tsconfig.json",
        "**/tsconfig.*.json",
      ],
      language: "json/jsonc",
      name: "@sparticuz/eslint-config/jsonc",
    },
  ),
);
