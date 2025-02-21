import * as regexpPlugin from "eslint-plugin-regexp";
import tseslint from "typescript-eslint";

export default tseslint.config({
  name: "regexp/flat/recommended",
  ...regexpPlugin.configs["flat/recommended"],
});
