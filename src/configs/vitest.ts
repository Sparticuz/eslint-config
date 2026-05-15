import vitest from "@vitest/eslint-plugin";
import nodePlugin from "eslint-plugin-n";
import { defineConfig } from "eslint/config";

import { TEST_FILES } from "../file-types.js";

export default defineConfig(
  {
    ...vitest.configs.recommended,
    files: TEST_FILES,
  },
  {
    name: "@sparticuz/eslint-config/vitest.ts",

    files: TEST_FILES,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    plugins: nodePlugin.configs["flat/recommended"].plugins,
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
