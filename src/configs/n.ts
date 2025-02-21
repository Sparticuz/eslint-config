import nodePlugin from "eslint-plugin-n";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  nodePlugin.configs["flat/recommended"] as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/n.ts for testing",

    files: ["tests/**", "test/**", "eslint.config.js", "vitest.config.ts"],
    rules: {
      /**
       * Don't require items to be published for tests
       */
      "n/no-unpublished-import": "off",
    },
  },
);
