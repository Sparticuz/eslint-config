import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config({
  name: "@sparticuz/eslint-config/jsx-a11y.ts",

  ...jsxA11yPlugin.flatConfigs.recommended,
  languageOptions: {
    ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
} as ConfigWithExtends);
