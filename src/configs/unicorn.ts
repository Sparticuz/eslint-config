import unicornPlugin from "eslint-plugin-unicorn";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    ...(unicornPlugin.configs.recommended as ConfigWithExtends),
    files: [...javascriptFiles, ...typescriptFiles],
  },
  {
    name: "@sparticuz/eslint-config/unicorn.ts",

    files: [...javascriptFiles, ...typescriptFiles],
    rules: {
      /**
       * I want to use named imports for path
       */
      "unicorn/import-style": [
        "error",
        {
          styles: {
            "node:path": {
              named: true,
            },
          },
        },
      ],
      /**
       * For database stuff, I need nulls
       */
      "unicorn/no-null": "off",
      /**
       * Disable switch curly braces
       */
      "unicorn/switch-case-braces": "off",
    },
  },
);
