import vitest from "eslint-plugin-vitest"; //supports es9 since 0.2.8

export const testConfig = {
  name: "sparticuz-node-test",
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
};
