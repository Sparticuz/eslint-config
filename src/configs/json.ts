import json from "@eslint/json";

export default [
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    name: "@sparticuz/eslint-config/json.ts",
    ...json.configs.recommended,
  },
];
