import prettierConfig from "eslint-config-prettier";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(prettierConfig as ConfigWithExtends);
