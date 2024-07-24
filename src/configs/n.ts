import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+
import nodePlugin from "eslint-plugin-n"; // Supports es9 v17+

export default tseslint.config(
  nodePlugin.configs["flat/recommended"] as ConfigWithExtends,
  {
    files: ["tests/**", "test/**", "eslint.config.js", "vitest.config.ts"],
    rules: {
      /**
       * Don't require items to be published for tests
       */
      "n/no-unpublished-import": "off",
    },
  },
);
