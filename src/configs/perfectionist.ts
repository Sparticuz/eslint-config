import type { Linter } from "eslint";

import perfectionist from "eslint-plugin-perfectionist";

export default [
  {
    name: "perfectionist/recommended-natural",
    ...perfectionist.configs["recommended-natural"],
  },
  {
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
] as Linter.Config[];
