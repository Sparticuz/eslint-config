import { reactRefresh } from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

import { JSX_FILES } from "../file-types.js";

export default defineConfig({
  extends: [reactRefresh.configs.next()],
  files: JSX_FILES,
  name: "@sparticuz/eslint-config/react-refresh",
});
