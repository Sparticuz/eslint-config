import vitest from "eslint-plugin-vitest"; //supports es9 since 0.2.8
import tseslint from "typescript-eslint"; // Pending v8+

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
});
