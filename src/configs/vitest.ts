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
  rules: {
    /**
     * Don't require items to be published for tests
     */
    "n/no-unpublished-import": "off",
    /**
     * Vite will already be there because of vitest
     */
    "n/no-extraneous-import": [
      "error",
      {
        allowModules: ["vite"],
      },
    ],
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
});
