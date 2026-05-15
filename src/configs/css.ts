import css from "@eslint/css";

import { ConfigArray } from "../config-array.js";
import { CSS_FILES } from "../file-types.js";

export default new ConfigArray([
  {
    ...css.configs.recommended,
    files: CSS_FILES,
    language: "css/css",
  },
]);
