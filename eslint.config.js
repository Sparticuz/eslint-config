//@ts-check
import myConfig from "./dist/eslint.config.js";
import tseslint from "typescript-eslint";

export default tseslint.config(...myConfig, {
  ignores: ["dist"],
});
