import nodePlugin from "eslint-plugin-n";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    ...(nodePlugin.configs["flat/recommended"] as ConfigWithExtends),
    files: [...javascriptFiles, ...typescriptFiles],
  },
  {
    name: "@sparticuz/eslint-config/n.ts for testing configs",

    files: ["tests/**", "test/**", "eslint.config.js", "vitest.config.ts"],
    rules: {
      /**
       * Don't require items to be published for tests
       */
      "n/no-unpublished-import": "off",
    },
  },
);
