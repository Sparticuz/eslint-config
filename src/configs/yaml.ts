import unicorn from "eslint-plugin-unicorn";
import yml from "eslint-plugin-yml";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray(
  defineConfig({
    extends: [...yml.configs.recommended, unicorn.configs["recommended-yaml"]],
    files: ["**/*.{yaml,yml}"],
    name: "@sparticuz/eslint-config/yaml",
  }),
);
