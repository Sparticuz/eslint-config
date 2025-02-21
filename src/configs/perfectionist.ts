import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    name: "perfectionist/recommended-natural",

    files: [...javascriptFiles, ...typescriptFiles],
    ...perfectionist.configs["recommended-natural"],
  },
  {
    name: "@sparticuz/eslint-config/perfectionist.ts",

    files: [...javascriptFiles, ...typescriptFiles],
    rules: {
      /**
       * Reset sorting by a new line
       */
      "perfectionist/sort-interfaces": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      /**
       * Make sure values are first in named imports
       */
      "perfectionist/sort-named-imports": [
        "error",
        { groupKind: "values-first", type: "natural" },
      ],
      /**
       * Reset sorting by a new line
       */
      "perfectionist/sort-objects": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      /**
       * Make sure nullish values are last
       */
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["unknown", "nullish"],
          type: "natural",
        },
      ],
    },
  },
);
