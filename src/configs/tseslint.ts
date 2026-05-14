import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import { javascriptFiles } from "./file-types.js";

export default defineConfig(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
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
    files: javascriptFiles,
  },
);
