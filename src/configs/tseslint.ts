import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {},
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
