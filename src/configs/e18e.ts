// eslint-disable-next-line unicorn/name-replacements -- e18e is the name of the plugin
import e18e from "@e18e/eslint-plugin";
import { defineConfig } from "eslint/config";

import {
  JAVASCRIPT_FILES,
  PACKAGEJSON_FILES,
  TYPESCRIPT_FILES,
} from "../file-types.js";

const config = defineConfig([
  {
    ...e18e.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES, ...PACKAGEJSON_FILES],
    name: "@sparticuz/eslint-config/e18e.ts",
  },
]);

export default config;
