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
