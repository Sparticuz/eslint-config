import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default tseslint.config(sonarJSPlugin.configs.recommended);
