import type { Linter } from "eslint";

import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

export default [
  comments.recommended,
  {
    name: "@sparticuz/eslint-config/eslint-comments.ts",
    plugins: comments.recommended.plugins,
    rules: {
      /**
       * The allowWholeFile option lets you allow disabling rules for the entire file while
       * still catching "open" eslint-disable directives in the middle of a file.
       */
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
      /**
       * Require a description when disabling rules. This helps developers understand why a
       * rule was disabled and can prevent confusion or misuse of eslint-disable directives.
       */
      "@eslint-community/eslint-comments/require-description": ["error"],
    },
  },
] as Linter.Config[];
