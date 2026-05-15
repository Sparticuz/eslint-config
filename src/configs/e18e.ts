// eslint-disable-next-line unicorn/prevent-abbreviations -- we want to use "e18e" as the name of the plugin in configs.
import e18e from "@e18e/eslint-plugin";

import {
  JAVASCRIPT_FILES,
  PACKAGEJSON_FILES,
  TYPESCRIPT_FILES,
} from "../file-types.js";

export default [
  {
    ...e18e.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES, ...PACKAGEJSON_FILES],
    name: "@sparticuz/eslint-config/e18e.ts",
  },
];
