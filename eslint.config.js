//@ts-check
import tseslint from "typescript-eslint";

import myConfig from "./dist/eslint.config.js";

export default tseslint.config(...myConfig, {
  ignores: ["dist"],
});
