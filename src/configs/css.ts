import css from "@eslint/css";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([
  {
    ...css.configs.recommended,
    files: ["**/*.css"],
    language: "css/css",
    name: "@sparticuz/eslint-config/css",
  },
]);
