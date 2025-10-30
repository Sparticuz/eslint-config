import type { Linter } from "eslint";

import promisePlugin from "eslint-plugin-promise";

export default [promisePlugin.configs["flat/recommended"]] as Linter.Config[];
