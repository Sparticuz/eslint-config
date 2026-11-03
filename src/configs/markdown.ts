import markdown from "@eslint/markdown";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig({
    extends: [
      ...markdown.configs.recommended,
      unicorn.configs["recommended-markdown"],
    ],
    files: ["**/*.md"],
    rules: {
      // Keep conventional uppercase documentation filenames such as README.md.
      "unicorn/filename-case": ["error", { ignore: ["^[A-Z][A-Z_-]*\\.md$"] }],
    },
  }),
);
