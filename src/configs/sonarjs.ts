import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint"; // Pending v8+

export default tseslint.config(sonarJSPlugin.configs.recommended);
