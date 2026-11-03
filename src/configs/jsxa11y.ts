import jsxA11y from "eslint-plugin-jsx-a11y-x";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig({
  extends: [jsxA11y.configs.strict],
  files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
});
