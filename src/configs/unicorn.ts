import unicornPlugin from "eslint-plugin-unicorn";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  unicornPlugin.configs["flat/recommended"] as ConfigWithExtends,
  {
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
