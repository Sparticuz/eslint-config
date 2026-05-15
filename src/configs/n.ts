import type { Linter } from "eslint";

import nodePlugin from "eslint-plugin-n";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./file-types.js";

export default [
  { ...nodePlugin.configs["flat/recommended"], files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES] },
  {
    name: "@sparticuz/eslint-config/n.ts/config-overrides",

    files: [
      "tests/**",
      "test/**",
      "eslint.config.js",
      "eslint.config.ts",
      "vitest.config.ts",
    ],
    plugins: nodePlugin.configs["flat/recommended"].plugins,
    rules: {
      /**
       * Don't require items to be published for tests and config files
       */
      "n/no-unpublished-import": "off",
    },
  },
] as Linter.Config[];
