import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [vitest.configs.recommended],
  files: ["tests/**", "test/**"],
  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  rules: {
    /**
     * Don't require items to be published for tests
     */
    "n/no-unpublished-import": "off",
  },
});
