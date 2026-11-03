import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig(
  {
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/tseslint.ts",

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      /**
       * Disable rule because of perfectionist/sort-interfaces
       */
      "@typescript-eslint/adjacent-overload-signatures": "off",

      /**
       * https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
       */
      "@typescript-eslint/method-signature-style": ["error", "property"],

      /**
       * Warn instead of error
       */
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      node: {
        // Make sure we are looking for Typescript files as well
        tryExtensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".mjsx",
          ".cjsx",
          ".ts",
          ".tsx",
          ".mts",
          ".cts",
          ".mtsx",
          ".ctsx",
          ".json",
          ".d.ts",
        ],
      },
    },
  },
  {
    // Disable typechecking for Javascript files
    extends: [tseslint.configs.disableTypeChecked],
    files: JAVASCRIPT_FILES,
  },
);
