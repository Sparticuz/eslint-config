import tseslint from "typescript-eslint";

import arrayFunctionConfig from "./configs/array-function.js";
import eslintJSConfig from "./configs/eslint.js";
import nodeConfig from "./configs/n.js";
import noUnsanitized from "./configs/no-unsanitized.js";
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
 */

export default tseslint.config(
  ...eslintJSConfig,
  ...nodeConfig,
  ...tseslintConfig,
  ...noUnsanitized,
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
