import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    name: "@sparticuz/eslint-config/tseslint.ts",

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      /**
       * Warn instead of error
       */
      "@typescript-eslint/no-deprecated": "warn",
    },
    settings: {
      node: {
        // Make sure we are looking for Typescript files as well
        tryExtensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".mjsx",
          ".cjsx",
          ".ts",
          ".tsx",
          ".mts",
          ".cts",
          ".mtsx",
          ".ctsx",
          ".json",
          ".d.ts",
        ],
      },
    },
  },
  {
    // Disable typechecking for Javascript files
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js", "**/*.jsx"],
  },
);
