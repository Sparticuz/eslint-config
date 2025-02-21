import promisePlugin from "eslint-plugin-promise";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config({
  ...(promisePlugin.configs["flat/recommended"] as ConfigWithExtends),
  files: [...javascriptFiles, ...typescriptFiles],
});
