import packageJson from "eslint-plugin-package-json";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig({
    extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
  }),
);
