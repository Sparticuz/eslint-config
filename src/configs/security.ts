import securityPlugin from "eslint-plugin-security";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  securityPlugin.configs.recommended as ConfigWithExtends,
);
