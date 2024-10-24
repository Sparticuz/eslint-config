import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
        { groupKind: "values-first" },
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
        },
      ],
    },
  },
);
