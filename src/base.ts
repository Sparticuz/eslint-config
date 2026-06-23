import { defineConfig } from "eslint/config";

import { ConfigArray } from "./config-array.js";
import arrayFunctionConfig from "./configs/array-function.js";
// eslint-disable-next-line unicorn/name-replacements -- e18e is the name of the plugin
import e18eConfig from "./configs/e18e.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import eslintJSConfig from "./configs/eslint.js";
import nodeConfig from "./configs/n.js";
import noUnsanitizedConfig from "./configs/no-unsanitized.js";
import perfectionistConfig from "./configs/perfectionist.js";
import promiseConfig from "./configs/promise.js";
import regexpConfig from "./configs/regexp.js";
import securityConfig from "./configs/security.js";
import sonarJsConfig from "./configs/sonarjs.js";
import tseslintConfig from "./configs/tseslint.js";
import unicornConfig from "./configs/unicorn.js";
import vitestConfig from "./configs/vitest.js";

export default new ConfigArray(
  defineConfig(
    ...eslintJSConfig,
    ...tseslintConfig,
    ...nodeConfig,
    ...e18eConfig,
    ...eslintCommentsConfig,
    ...noUnsanitizedConfig,
    ...promiseConfig,
    ...unicornConfig,
    ...arrayFunctionConfig,
    ...regexpConfig,
    ...sonarJsConfig,
    ...securityConfig,
    ...perfectionistConfig,
    ...vitestConfig,
  ),
);
