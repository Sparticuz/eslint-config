import vitest from "@vitest/eslint-plugin";
import tseslint from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    name: "vitest/recommended",

    files: [...javascriptFiles, ...typescriptFiles],
    ...vitest.configs.recommended,
  },
  {
    name: "@sparticuz/eslint-config/vitest.ts",

    files: ["**/tests/**", "**/test/**", "vitest.config.ts", "**/*.test.*"],
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
