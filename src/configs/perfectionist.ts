import perfectionist from "eslint-plugin-perfectionist";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  // @ts-expect-error The configs variable does exist
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  perfectionist.configs["recommended-natural"] as ConfigWithExtends,
  {
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
  },
);
