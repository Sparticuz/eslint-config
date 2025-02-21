import securityPlugin from "eslint-plugin-security";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config({
  ...(securityPlugin.configs.recommended as ConfigWithExtends),
  files: [...javascriptFiles, ...typescriptFiles],
});
