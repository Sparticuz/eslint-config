import type { Linter } from "eslint";

import importPlugin from "eslint-plugin-import";

const config: Linter.Config[] = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    name: "@sparticuz/eslint-config/import.ts",
    rules: {
      /**
       * Turn off all rules based on the advice of @typescript/eslint
       * https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
       */
      "import/default": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",

      /**
       * Disable rule in favor of @typescript-eslint/no-deprecated
       */
      "import/no-deprecated": "off",

      /**
       * Disable this rule in favor of eslint-plugin-perfectionist
       */
      "import/order": "off",
    },
    settings: {
      "import/resolver": {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        node: true,
        typescript: true,
      },
    },
  },
] satisfies Linter.Config[];

export default config;
