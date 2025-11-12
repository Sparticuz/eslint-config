import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

import { TEST_FILES } from "./file-types.js";

export default defineConfig(
  {
    files: TEST_FILES,
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },

  {
    name: "@sparticuz/eslint-config/vitest.ts",

    files: TEST_FILES,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      /**
       * Vite will already be there because of vitest
       */
      "n/no-extraneous-import": [
        "error",
        {
          allowModules: ["vite"],
        },
      ],
      /**
       * Don't require items to be published for tests
       */
      "n/no-unpublished-import": "off",
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
);
