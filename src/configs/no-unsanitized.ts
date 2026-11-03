import nounsanitized from "eslint-plugin-no-unsanitized";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig([
  {
    extends: [nounsanitized.configs.recommended],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "no-unsanitized/recommended",
  },
]);
