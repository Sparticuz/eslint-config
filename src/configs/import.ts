import tsParser from "@typescript-eslint/parser";
import { importX } from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";

import { ConfigArray } from "../config-array.js";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";

export default new ConfigArray(
  defineConfig({
    extends: [importX.flatConfigs.recommended, importX.flatConfigs.typescript],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
    },
    name: "@sparticuz/eslint-config/import.ts",
    rules: {
      /**
       * Turn off all rules based on the advice of @typescript/eslint
       * https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
       */
      "import-x/default": "off",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-unresolved": "off",

      /**
       * Disable rule in favor of @typescript-eslint/no-deprecated
       */
      "import-x/no-deprecated": "off",

      /**
       * Disable this rule in favor of eslint-plugin-perfectionist
       */
      "import-x/order": "off",
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
    },
  }),
);
