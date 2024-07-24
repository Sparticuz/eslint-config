import tseslint from "typescript-eslint"; // Pending v8+

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      /**
       * Set `@typescript-eslint/no-unused-vars` to just warn
       */
      "@typescript-eslint/no-unused-vars": "warn",
      /**
       * Disable because of perfectionist
       */
      "@typescript-eslint/sort-type-constituents": "off",
      "@typescript-eslint/member-ordering": "off",
    },
    settings: {
      node: {
        // Make sure we are looking for Typescript files as well
        tryExtensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".ts",
          ".tsx",
          ".json",
          ".d.ts",
        ],
      },
    },
  },
  {
    // Disable typechecking for Javascript files
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js"],
  },
);
