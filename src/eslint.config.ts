import tseslint from "typescript-eslint";

import arrayFunctionConfig from "./configs/array-function.js";
import eslintJSConfig from "./configs/eslint.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import nodeConfig from "./configs/n.js";
import perfectionistConfig from "./configs/perfectionist.js";
import prettierConfig from "./configs/prettier.js";
import promiseConfig from "./configs/promise.js";
import regexpConfig from "./configs/regexp.js";
import securityConfig from "./configs/security.js";
import sonarJsConfig from "./configs/sonarjs.js";
import tseslintConfig from "./configs/tseslint.js";
import unicornConfig from "./configs/unicorn.js";
import vitestConfig from "./configs/vitest.js";

/**
 *  Plugins to re-implement when they support Flat Config
 *
 *  eslint-plugin-import will eventually come back...unfortunantly
 *
 * // "eslint-plugin-no-unsanitized": "^4.0.2",
 * // import noUnsanitizedConfig from "./configs/no-unsanitized.js";
 * // ...noUnsanitizedConfig,
 */

export default tseslint.config(
  ...eslintJSConfig,
  ...eslintCommentsConfig,
  ...nodeConfig,
  ...tseslintConfig,
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
