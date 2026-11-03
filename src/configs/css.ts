import css from "@eslint/css";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";
import { CSS_FILES } from "../file-types.js";

export default new ConfigArray(
  defineConfig({
    extends: [css.configs.recommended, unicorn.configs["recommended-css"]],
    files: CSS_FILES,
    language: "css/css",
  }),
);
