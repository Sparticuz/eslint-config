import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";

import { ConfigArray } from "./config-array.js";
import importConfig from "./configs/import.js";
import jsxA11yConfig from "./configs/jsxa11y.js";
import reactKitConfig from "./configs/react-kit.js";
import reactConfigs from "./configs/react.js";
import {
  JAVASCRIPT_FILES,
  NEXT_JS_FILES,
  TYPESCRIPT_FILES,
} from "./file-types.js";

const kitPlugin = reactKitConfig[0]?.plugins?.["@eslint-react/kit"];
if (!kitPlugin)
  throw new Error("@eslint-react/kit plugin not found in reactKitConfig");

export default new ConfigArray(
  defineConfig(
    ...reactConfigs,
    ...jsxA11yConfig,
    ...importConfig,
    ...reactKitConfig,
    {
      files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      name: "@sparticuz/eslint-config/react/browser-globals",
    },

    nextPlugin.configs.recommended,
    nextPlugin.configs["core-web-vitals"],

    {
      files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
      name: "@sparticuz/eslint-config/react",
      rules: {
        "@eslint-react/kit/function-component-definition": "warn",
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false } },
        ],
        "import-x/no-default-export": "warn",
      },
    },

    {
      files: NEXT_JS_FILES,
      name: "@sparticuz/eslint-config/react/nextjs-overrides",
      rules: {
        "@eslint-react/kit/function-component-definition": "off",
        "import-x/no-default-export": "off",
      },
    },

    {
      files: ["*.config.ts", "*.config.js", "**/*.stories.*"],
      name: "@sparticuz/eslint-config/react/config-overrides",
      rules: {
        "import-x/no-default-export": "off",
      },
    },
  ),
);
