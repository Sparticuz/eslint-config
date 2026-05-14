import type { Linter } from "eslint";

import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  eslintReact.configs["strict-typescript"],
  reactHooks.configs["recommended-latest"],
  // Must come last: disables react-hooks/* rules that @eslint-react covers,
  // so "off" overrides win rather than being overridden by recommended-latest.
  eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
] as Linter.Config[];
