import type { Linter } from "eslint";

import packageJson from "eslint-plugin-package-json";
import { defineConfig } from "eslint/config";

const config: Linter.Config[] = defineConfig([
  packageJson.configs.recommended,
  packageJson.configs.stylistic,
]);

export default config;
