import importPlugin from "eslint-plugin-import";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  importPlugin.flatConfigs.recommended as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/import.ts",
    rules: {
      "import/order": "off",
    },
    settings: {
      "import/resolver": {
        node: true,
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
      },
    },
  },
);
