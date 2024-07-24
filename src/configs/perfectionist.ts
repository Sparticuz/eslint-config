import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(perfectionistNatural as ConfigWithExtends, {
  rules: {
    /**
     * Reset sorting by a new line
     */
    "perfectionist/sort-objects": ["error", { "partition-by-new-line": true }],

    /**
     * Make sure nulls are last in types
     */
    "perfectionist/sort-union-types": ["error", { "nullable-last": true }],
  },
});
