import perfectionist from "eslint-plugin-perfectionist";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  // @ts-expect-error The configs variable does exist
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  perfectionist.configs["recommended-natural"] as ConfigWithExtends,
  {
    rules: {
      /**
       * Reset sorting by a new line
       */
      "perfectionist/sort-objects": [
        "error",
        { "partition-by-new-line": true },
      ],
      /**
       * Make sure nulls are last in types
       */
      "perfectionist/sort-union-types": ["error", { "nullable-last": true }],
    },
  },
);
