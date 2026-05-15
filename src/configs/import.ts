import tsParser from "@typescript-eslint/parser";
import { importX } from "eslint-plugin-import-x";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
    },
    name: "@sparticuz/eslint-config/import.ts",
    plugins: importX.flatConfigs.recommended.plugins,
    rules: {
      "import-x/default": "off",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-unresolved": "off",
      "import-x/no-deprecated": "off",
      "import-x/order": "off",
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
]);
