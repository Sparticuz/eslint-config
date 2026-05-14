import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig({
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
     * Warn on unknown Tailwind classes (override recommended's "error")
     */
    "better-tailwindcss/no-unknown-classes": "warn",
  },
});
