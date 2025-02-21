import nounsanitized from "eslint-plugin-no-unsanitized";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

import { javascriptFiles, typescriptFiles } from "./file-types.js";

export default tseslint.config({
  name: "no-unsanitized/recommended",

  files: [...javascriptFiles, ...typescriptFiles],
  ...nounsanitized.configs.recommended,
} as ConfigWithExtends);
