import tseslint from "typescript-eslint";

import arrayFunctionConfig from "./configs/array-function.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import eslintJSConfig from "./configs/eslint.js";
import importPlugin from "./configs/import.js";
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
  ...importPlugin,
  ...eslintCommentsConfig,
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
);
