import css from "@eslint/css";
import { tailwindSyntax } from "@eslint/css/syntax";

import { cssFiles } from "./file-types.js";

export default [
  {
    files: [...cssFiles],
    language: "css/css",
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    name: "@sparticuz/eslint-config/css.ts",
    ...css.configs.recommended,
  },
];
