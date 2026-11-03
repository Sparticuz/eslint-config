import prettierConfig from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default new ConfigArray(
  defineConfig({
    extends: [prettierConfig],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  }),
);
