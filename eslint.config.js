import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import myConfig from "./dist/base.js";

const tsconfigRootDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig(globalIgnores(["dist"]), ...myConfig, {
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: tsconfigRootDirectory,
    },
  },
  name: "local-config",
});
