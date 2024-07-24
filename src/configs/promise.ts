import promisePlugin from "eslint-plugin-promise";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  promisePlugin.configs["flat/recommended"] as ConfigWithExtends,
);
