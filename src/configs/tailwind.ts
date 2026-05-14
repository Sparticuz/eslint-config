import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig({
  ...tailwindPlugin.configs.stylistic,
  ...tailwindPlugin.configs.correctness,
  ...tailwindPlugin.configs.recommended,
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  name: "@sparticuz/eslint-config/tailwind",
  rules: {
    /**
     * Prefer single-line Tailwind classes
     */
    "better-tailwindcss/enforce-consistent-line-wrapping": [
      "warn",
      {
        preferSingleLine: true,
      },
    ],
    /**
     * Warn on unknown Tailwind classes
     */
    "better-tailwindcss/no-unknown-classes": "warn",
  },
});
