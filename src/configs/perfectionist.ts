import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig([
  {
    extends: [perfectionist.configs["recommended-natural"]],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/perfectionist.ts",
    rules: {
      /**
       * Reset sorting by a new line
       */
      "perfectionist/sort-interfaces": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      /**
       * Make sure values are first in named imports
       */
      "perfectionist/sort-named-imports": [
        "error",
        {
          groups: ["value-import", "type-import"],
          type: "natural",
        },
      ],
      /**
       * Reset sorting by a new line
       */
      "perfectionist/sort-objects": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      /**
       * Make sure nullish values are last
       */
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["unknown", "nullish"],
          type: "natural",
        },
      ],
    },
  },
]);
