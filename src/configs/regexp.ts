import * as regexpPlugin from "eslint-plugin-regexp"; // Pending 2.6.0+
import tseslint from "typescript-eslint"; // Pending v8+

export default tseslint.config(regexpPlugin.configs["flat/recommended"]);
