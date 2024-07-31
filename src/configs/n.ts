import nodePlugin from "eslint-plugin-n";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

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
