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
       * Disable in favor of @typescript-eslint/no-deprecated
       */
      "sonarjs/deprecation": "off",
      /**
       * This rule is dumb
       */
      "sonarjs/no-duplicate-string": "off",
      /**
       * Disable in favor of @typescript-eslint/no-unused-vars
       */
      "sonarjs/no-unused-vars": "off",
      /**
       * Use @unicorn/expiring-todo-comments
       */
      "sonarjs/todo-tag": "off",
    },
  },
);
