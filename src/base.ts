import { defineConfig } from "eslint/config";

import arrayFunctionConfig from "./configs/array-function.js";
import eslintCommentsConfig from "./configs/eslint-comments.js";
import eslintJSConfig from "./configs/eslint.js";
import {
  JAVASCRIPT_FILES,
  TYPESCRIPT_FILES,
  withFiles,
} from "./configs/file-types.js";
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

const JS_TS_FILES = [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES];

export default defineConfig(
  ...withFiles(JS_TS_FILES, [
    ...eslintJSConfig,
    ...tseslintConfig,
    ...nodeConfig,
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
  ]),
);
