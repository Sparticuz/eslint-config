import * as regexpPlugin from "eslint-plugin-regexp";
import tseslint from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config({
  name: "regexp/flat/recommended",

  files: [...javascriptFiles, ...typescriptFiles],
  ...regexpPlugin.configs["flat/recommended"],
});
