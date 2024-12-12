// @ts-expect-error There are no types
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  jsxA11yPlugin.flatConfigs.recommended as ConfigWithExtends,
);
