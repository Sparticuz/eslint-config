import nounsanitized from "eslint-plugin-no-unsanitized";
import tseslint, { ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  nounsanitized.configs.recommended[0] as ConfigWithExtends,
);
