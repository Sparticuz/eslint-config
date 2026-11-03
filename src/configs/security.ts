import type { Config } from "eslint/config";

import securityPlugin from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default defineConfig([
  {
    extends: [securityPlugin.configs.recommended as Config],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
]);
