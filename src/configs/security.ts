import securityPlugin from "eslint-plugin-security";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  securityPlugin.configs.recommended as ConfigWithExtends,
);
