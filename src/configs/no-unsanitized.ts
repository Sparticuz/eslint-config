import type { Linter } from "eslint";

import nounsanitized from "eslint-plugin-no-unsanitized";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./file-types.js";

export default [
  {
    ...nounsanitized.configs.recommended,
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "no-unsanitized/recommended",
  },
] as Linter.Config[];
