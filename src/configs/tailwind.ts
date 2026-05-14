import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // Base configs (plugin registration lives inside these)
  {
    extends: [
      tailwindPlugin.configs.stylistic,
      tailwindPlugin.configs.correctness,
    ],
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    name: "@sparticuz/eslint-config/tailwind/base",
  },
  // recommended registers the plugin + rules; we override some rules below
  // by registering the plugin explicitly here so rule overrides work correctly
  {
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
  },
);
