import promisePlugin from "eslint-plugin-promise";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  promisePlugin.configs["flat/recommended"] as ConfigWithExtends,
);
