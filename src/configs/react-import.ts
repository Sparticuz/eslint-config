import reactImport from "eslint-plugin-react-import";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

const config = defineConfig({
  extends: [reactImport.configs.recommended],
  files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  name: "@sparticuz/eslint-config/react-import",
  rules: {
    "react-import/consistent-syntax": ["error", "named"],
  },
});
export default config;
