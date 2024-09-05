import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  sonarJSPlugin.configs.recommended as ConfigWithExtends,
  {
    rules: {
      /**
       * Prefer @typescript-eslint/no-deprecated
       */
      "sonarjs/deprecation": "off",
      /**
       * Commented out code is for development
       * But should be removed for production
       */
      "sonarjs/no-commented-code": "warn",
      /**
       * This rule is dumb
       */
      "sonarjs/no-duplicate-string": "off",
      /**
       * Just warn for "to-do"
       */
      "sonarjs/todo-tag": "warn",
    },
  },
);
