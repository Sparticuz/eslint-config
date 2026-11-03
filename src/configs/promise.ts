import promisePlugin from "eslint-plugin-promise";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig([
  {
    extends: [promisePlugin.configs["flat/recommended"]],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
]);
