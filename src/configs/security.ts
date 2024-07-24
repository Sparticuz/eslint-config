import securityPlugin from "eslint-plugin-security";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  securityPlugin.configs.recommended as ConfigWithExtends,
);
