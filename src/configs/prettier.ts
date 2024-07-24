import prettierConfig from "eslint-config-prettier";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(prettierConfig as ConfigWithExtends);
