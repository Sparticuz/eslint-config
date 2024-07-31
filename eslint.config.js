import myConfig from "./dist/eslint.config.js";

export default [
  ...myConfig,
  {
    ignores: ["dist"],
  },
];
