import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";

import { NEXT_JS_FILES } from "./configs/file-types.js";
import importConfig from "./configs/import.js";
import jsxA11yConfig from "./configs/jsxa11y.js";
import reactKitConfig from "./configs/react-kit.js";
import reactConfigs from "./configs/react.js";

export default defineConfig(
  ...reactConfigs,
  ...jsxA11yConfig,
  ...importConfig,
  ...reactKitConfig,

  // React projects run in the browser
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    name: "@sparticuz/eslint-config/react/browser-globals",
  },

  // Next.js
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

  // Custom rule overrides
  {
    name: "@sparticuz/eslint-config/react",
    rules: {
      /**
       * Downgrade function-component-definition from error to warn
       */
      "@eslint-react/kit/function-component-definition": "warn",
      /**
       * Allow void return in JSX attributes (e.g. onClick handlers returning promises)
       */
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      /**
       * Warn on default exports to encourage named exports
       */
      "import-x/no-default-export": "warn",
      /**
       * React component files use PascalCase by convention
       */
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

  // Next.js convention files need default exports and allow function declarations
  {
    files: NEXT_JS_FILES,
    name: "@sparticuz/eslint-config/react/nextjs-overrides",
    rules: {
      "@eslint-react/kit/function-component-definition": "off",
      "import-x/no-default-export": "off",
    },
  },

  // Config files need default exports
  {
    files: ["*.config.ts", "*.config.js", "**/*.stories.*"],
    name: "@sparticuz/eslint-config/react/config-overrides",
    rules: {
      "import-x/no-default-export": "off",
    },
  },
);
