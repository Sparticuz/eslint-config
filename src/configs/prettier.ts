import type { Config } from "eslint/config";

import prettierConfig from "eslint-config-prettier/flat";

import { ConfigArray } from "../config-array.js";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default new ConfigArray([
  {
    ...prettierConfig,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
] satisfies Config[]);
