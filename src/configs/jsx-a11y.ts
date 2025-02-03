import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
  ...jsxA11yPlugin.flatConfigs.recommended,
  languageOptions: {
    ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
} as ConfigWithExtends);
