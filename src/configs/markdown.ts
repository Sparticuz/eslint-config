import markdown from "@eslint/markdown";

import { ConfigArray } from "../config-array.js";

export default new ConfigArray([...markdown.configs.recommended]);
