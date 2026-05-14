import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import myConfig from "./dist/base.js";
import cssConfig from "./dist/configs/css.js";
import jsonConfig from "./dist/configs/json.js";
import markdownConfig from "./dist/configs/markdown.js";
import packageJsonConfig from "./dist/configs/package-json.js";
import tailwindConfig from "./dist/configs/tailwind.js";

const tsconfigRootDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig(
  globalIgnores(["dist"]),
  ...myConfig,
  ...cssConfig,
  ...tailwindConfig,
  ...jsonConfig,
  ...markdownConfig,
  ...packageJsonConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: tsconfigRootDirectory,
      },
    },
    name: "local-config",
  },
);
