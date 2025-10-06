import type { Linter } from "eslint";

import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

export default [
  comments.recommended,
  {
    name: "@sparticuz/eslint-config/eslint-comments.ts",
    rules: {
      /**
       * The allowWholeFile option lets you allow disabling rules for the entire file while
       * still catching "open" eslint-disable directives in the middle of a file.
       */
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
    },
  },
] satisfies Linter.Config[];
