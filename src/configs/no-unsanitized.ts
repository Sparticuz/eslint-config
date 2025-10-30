import type { Linter } from "eslint";

import nounsanitized from "eslint-plugin-no-unsanitized";

export default [
  {
    name: "no-unsanitized/recommended",
    ...nounsanitized.configs.recommended,
  },
] as Linter.Config[];
