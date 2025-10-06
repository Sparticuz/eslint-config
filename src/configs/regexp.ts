import type { Linter } from "eslint";

import * as regexpPlugin from "eslint-plugin-regexp";

export default [
  {
    name: "regexp/flat/recommended",
    ...regexpPlugin.configs["flat/recommended"],
  },
] satisfies Linter.Config[];
