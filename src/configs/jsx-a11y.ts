import type { Linter } from "eslint";

import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  {
    name: "@sparticuz/eslint-config/jsx-a11y.ts",

    ...jsxA11yPlugin.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
] satisfies Linter.Config[];
