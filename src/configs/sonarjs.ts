import sonarJSPlugin from "eslint-plugin-sonarjs";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

export default tseslint.config(
  sonarJSPlugin.configs.recommended as ConfigWithExtends,
  {
    rules: {
      /**
       * This rule is dumb
       */
      "sonarjs/no-duplicate-string": "off",
    },
  },
);
