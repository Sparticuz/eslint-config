import type { Linter } from "eslint";

import nodePlugin from "eslint-plugin-n";

export default [
  nodePlugin.configs["flat/recommended"],
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
] as Linter.Config[];
