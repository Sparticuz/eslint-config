import unicornPlugin from "eslint-plugin-unicorn";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  unicornPlugin.configs.recommended as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/unicorn.ts",
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
