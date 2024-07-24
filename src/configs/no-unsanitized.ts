import nounsanitized from "eslint-plugin-no-unsanitized";
import tseslint, { ConfigWithExtends } from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  nounsanitized.configs.recommended as ConfigWithExtends,
);
