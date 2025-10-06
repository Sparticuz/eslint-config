import { defineConfig } from "eslint/config";

import myConfig from "./dist/eslint.config.js";

export default defineConfig(...myConfig, {
  name: "local-config",

  ignores: ["dist"],
});
