import * as regexpPlugin from "eslint-plugin-regexp";
import tseslint from "typescript-eslint";

export default tseslint.config(regexpPlugin.configs["flat/recommended"]);
