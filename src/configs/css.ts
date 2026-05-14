import type { Linter } from "eslint";

import css from "@eslint/css";

const config: Linter.Config[] = [
  {
    ...css.configs.recommended,
    files: ["**/*.css"],
    language: "css/css",
    name: "@sparticuz/eslint-config/css",
  },
];

export default config;
