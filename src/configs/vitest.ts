import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [vitest.configs.recommended],
  files: ["tests/**", "test/**", "vitest.config.ts"],
  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
  rules: {
    /**
     * Vite will already be there because of vitest
     */
    "n/no-extraneous-import": [
      "error",
      {
        allowModules: ["vite"],
      },
    ],
    /**
     * Don't require items to be published for tests
     */
    "n/no-unpublished-import": "off",
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
});
