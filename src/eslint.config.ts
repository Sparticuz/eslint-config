import tseslint from "typescript-eslint"; // Pending v8+
import eslintJSConfig from "./configs/eslint.js";
import nodeConfig from "./configs/n.js";
import tseslintConfig from "./configs/tseslint.js";
import promiseConfig from "./configs/promise.js";
import unicornConfig from "./configs/unicorn.js";
import arrayFunctionConfig from "./configs/array-function.js";
import regexpConfig from "./configs/regexp.js";
import sonarJsConfig from "./configs/sonarjs.js";
import securityConfig from "./configs/security.js";
import prettierConfig from "./configs/prettier.js";

/**
 *  Plugins to re-implement when they support Flat Config
 * "eslint-plugin-deprecation": https://github.com/gund/eslint-plugin-deprecation/pull/79,
 *    This may be migrated into tseslint 8
 *
 *  eslint-plugin-import will eventually come back...unfortunantly
 */

export default tseslint.config(
  ...eslintJSConfig,
  ...nodeConfig,
  ...tseslintConfig,
  ...promiseConfig,
  ...unicornConfig,
  ...arrayFunctionConfig,
  ...regexpConfig,
  ...sonarJsConfig,
  ...securityConfig,
  ...prettierConfig,
);
