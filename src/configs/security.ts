import type { Linter } from "eslint";

import securityPlugin from "eslint-plugin-security";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...securityPlugin.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
] as Linter.Config[];
