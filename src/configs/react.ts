import type { Config } from "eslint/config";

import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";
import eslintKit from "./react-kit.js";

export default [
  {
    ...reactHooks.configs.flat["recommended-latest"],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/react-hooks.ts",
  },
  // Must come last: disables react-hooks/* rules that @eslint-react covers,
  // so "off" overrides win rather than being overridden by recommended-latest.
  eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
  {
    ...eslintReact.configs["strict-typescript"],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
  eslintKit,
] as Config[];
