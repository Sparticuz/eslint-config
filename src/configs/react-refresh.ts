import { reactRefresh } from "eslint-plugin-react-refresh";

import { JSX_FILES } from "../file-types.js";

export default [
  {
    ...reactRefresh.configs.next(),
    files: JSX_FILES,
    name: "@sparticuz/eslint-config/react-refresh",
  },
];
