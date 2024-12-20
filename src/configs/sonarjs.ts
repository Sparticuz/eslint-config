import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  {
    name: "sonarjs/recommended",
    ...sonarJSPlugin.configs.recommended,
  } as ConfigWithExtends,
  {
    name: "@sparticuz/eslint-config/sonarjs.ts",
    rules: {
      /**
       * This rule is dumb
       */
      "sonarjs/no-duplicate-string": "off",
      /**
       * Disable in favor of @typescript-eslint/no-unused-vars
       */
      "sonarjs/no-unused-vars": "off",
      /**
       * TODO's should just be warnings, not errors
       */
      "sonarjs/todo-tag": "warn",
    },
  },
);
