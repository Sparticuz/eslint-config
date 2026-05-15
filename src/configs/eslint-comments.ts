import type { Linter } from "eslint";

import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...comments.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
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
      /**
       * Require a description when disabling rules. This helps developers understand why a
       * rule was disabled and can prevent confusion or misuse of eslint-disable directives.
       */
      "@eslint-community/eslint-comments/require-description": ["warn"],
    },
  },
] as Linter.Config[];
