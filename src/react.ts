import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import globals from "globals";

import importConfig from "./configs/import.js";
import jsxA11yConfig from "./configs/jsxa11y.js";
import reactKitConfig from "./configs/react-kit.js";
import reactConfigs from "./configs/react.js";

const NEXT_JS_FILES = [
  "**/page.tsx",
  "**/layout.tsx",
  "**/loading.tsx",
  "**/error.tsx",
  "**/not-found.tsx",
  "**/route.ts",
  "**/default.tsx",
  "**/template.tsx",
  "**/opengraph-image.tsx",
  "**/icon.tsx",
  "**/apple-icon.tsx",
  "**/manifest.ts",
  "**/sitemap.ts",
  "**/robots.ts",
  "**/middleware.ts",
];

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
