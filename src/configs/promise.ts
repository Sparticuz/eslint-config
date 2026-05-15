import type { Linter } from "eslint";

import promisePlugin from "eslint-plugin-promise";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...promisePlugin.configs["flat/recommended"],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
] as Linter.Config[];
