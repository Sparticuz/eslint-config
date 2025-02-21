import importPlugin from "eslint-plugin-import";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config(
  {
    ...(importPlugin.flatConfigs.recommended as ConfigWithExtends),
    files: [...javascriptFiles, ...typescriptFiles],
  },
  {
    ...(importPlugin.flatConfigs.typescript as ConfigWithExtends),
    files: [...javascriptFiles, ...typescriptFiles],
  },
  {
    name: "@sparticuz/eslint-config/import.ts",

    files: [...javascriptFiles, ...typescriptFiles],
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
);
