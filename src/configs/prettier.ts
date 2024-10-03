import prettierConfig from "eslint-config-prettier";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config({
  name: "prettier",
  ...prettierConfig,
} as ConfigWithExtends);
