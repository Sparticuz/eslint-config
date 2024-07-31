import prettierConfig from "eslint-config-prettier";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(prettierConfig as ConfigWithExtends);
