import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    ...(comments.recommended as ConfigWithExtends),
    files: [...javascriptFiles, ...typescriptFiles],
  },
  {
    name: "@sparticuz/eslint-config/eslint-comments.ts",

    files: [...javascriptFiles, ...typescriptFiles],
    rules: {
      /**
       * The allowWholeFile option lets you allow disabling rules for the entire file while
       * still catching "open" eslint-disable directives in the middle of a file.
       */
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
    },
  },
);
