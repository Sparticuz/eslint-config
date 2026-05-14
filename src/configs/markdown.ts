import type { Linter } from "eslint";

import markdown from "@eslint/markdown";

const config: Linter.Config[] = [...markdown.configs.recommended];

export default config;
