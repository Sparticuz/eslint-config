import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "../file-types.js";
import eslintKit from "./react-kit.js";

export default defineConfig(
  {
    extends: [reactHooks.configs.flat["recommended-latest"]],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
    name: "@sparticuz/eslint-config/react-hooks.ts",
  },
  {
    // Disable conflicts after recommended-latest so the "off" overrides win.
    extends: [
      eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"],
      eslintReact.configs["strict-typescript"],
    ],
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
  },
  {
    extends: [eslintReact.configs["strict-type-checked"]],
    files: TYPESCRIPT_FILES,
  },
  eslintKit,
);
