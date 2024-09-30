import nounsanitized from "eslint-plugin-no-unsanitized";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  nounsanitized.configs.recommended as ConfigWithExtends,
);
