import type { Linter } from "eslint";

import tsParser from "@typescript-eslint/parser";
import { importX } from "eslint-plugin-import-x";

const config: Linter.Config[] = [
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
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
  },
] satisfies Linter.Config[];

export default config;
