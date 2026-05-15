import type { Linter } from "eslint";

import regexpPlugin from "eslint-plugin-regexp";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default [
  {
    ...regexpPlugin.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/regexp.ts",
  },
] as Linter.Config[];
