import promisePlugin from "eslint-plugin-promise";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  promisePlugin.configs["flat/recommended"] as ConfigWithExtends,
);
