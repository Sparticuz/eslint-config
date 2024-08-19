import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(perfectionist.configs["recommended-natural"], {
  rules: {
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
    "perfectionist/sort-objects": ["error", { partitionByNewLine: true }],
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
});
