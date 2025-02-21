import tseslint from "typescript-eslint";

import arrayFunctionConfig from "./configs/array-function.js";
import cssConfig from "./configs/css.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import eslintJSConfig from "./configs/eslint.js";
import importConfig from "./configs/import.js";
import jsonConfig from "./configs/json.js";
import jsxA11yConfig from "./configs/jsx-a11y.js";
import markdownConfig from "./configs/markdown.js";
import nodeConfig from "./configs/n.js";
import noUnsanitizedConfig from "./configs/no-unsanitized.js";
import perfectionistConfig from "./configs/perfectionist.js";
import prettierConfig from "./configs/prettier.js";
import promiseConfig from "./configs/promise.js";
import regexpConfig from "./configs/regexp.js";
import securityConfig from "./configs/security.js";
import sonarJsConfig from "./configs/sonarjs.js";
import tseslintConfig from "./configs/tseslint.js";
import unicornConfig from "./configs/unicorn.js";
import vitestConfig from "./configs/vitest.js";

export default tseslint.config(
  ...eslintJSConfig,
  ...tseslintConfig,
  ...nodeConfig,
  ...importConfig,
  ...jsonConfig,
  ...jsxA11yConfig,
  ...eslintCommentsConfig,
  ...markdownConfig,
  ...noUnsanitizedConfig,
  ...promiseConfig,
  ...unicornConfig,
  ...arrayFunctionConfig,
  ...regexpConfig,
  ...sonarJsConfig,
  ...securityConfig,
  ...perfectionistConfig,
  ...prettierConfig,
  ...vitestConfig,
  // @ts-expect-error This is a type error
  ...cssConfig,
);
