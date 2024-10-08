// @ts-expect-error There are no types
import importPlugin from "eslint-plugin-import";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  importPlugin.flatConfigs.recommended as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/import.ts",
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
