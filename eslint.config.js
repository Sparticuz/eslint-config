import { defineConfig, globalIgnores } from "eslint/config";

import myConfig from "./dist/eslint.config.js";

export default defineConfig(
  ...myConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    name: "local-config",
  },
  globalIgnores(["dist"]),
);
