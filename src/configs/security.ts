import type { Linter } from "eslint";

import securityPlugin from "eslint-plugin-security";

export default [securityPlugin.configs.recommended] as Linter.Config[];
