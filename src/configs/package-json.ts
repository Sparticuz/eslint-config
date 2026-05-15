import packageJson from "eslint-plugin-package-json";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig([
    packageJson.configs.recommended,
    packageJson.configs.stylistic,
  ]),
);
