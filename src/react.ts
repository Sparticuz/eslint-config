import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import { ConfigArray } from "./config-array.js";
import { NEXT_JS_FILES } from "./configs/file-types.js";
import importConfig from "./configs/import.js";
import jsxA11yConfig from "./configs/jsxa11y.js";
import reactKitConfig from "./configs/react-kit.js";
import reactConfigs from "./configs/react.js";

const kitPlugin = reactKitConfig[0]?.plugins?.["@eslint-react/kit"];
if (!kitPlugin) throw new Error("@eslint-react/kit plugin not found in reactKitConfig");

export default new ConfigArray(
  defineConfig(
    ...reactConfigs,
    ...jsxA11yConfig,
    ...importConfig,
    ...reactKitConfig,

    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      name: "@sparticuz/eslint-config/react/browser-globals",
    },

    {
      name: "@sparticuz/eslint-config/next",
      plugins: {
        "@next/next": nextPlugin,
      },
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs["core-web-vitals"].rules,
      },
    },

    {
      name: "@sparticuz/eslint-config/react",
      plugins: {
        "@eslint-react/kit": kitPlugin,
        "@typescript-eslint": tseslint.plugin,
      },
      rules: {
        "@eslint-react/kit/function-component-definition": "warn",
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false } },
        ],
        "import-x/no-default-export": "warn",
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },

    {
      files: NEXT_JS_FILES,
      name: "@sparticuz/eslint-config/react/nextjs-overrides",
      plugins: {
        "@eslint-react/kit": kitPlugin,
      },
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
