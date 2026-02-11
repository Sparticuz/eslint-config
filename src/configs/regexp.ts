import type { Linter } from "eslint";

import regexpPlugin from "eslint-plugin-regexp";

export default [regexpPlugin.configs.recommended] as Linter.Config[];
