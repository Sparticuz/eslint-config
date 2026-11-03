import baseConfig from "@sparticuz/eslint-config";
import reactConfig from "@sparticuz/eslint-config/react";
import { ESLint } from "eslint";
import assert from "node:assert/strict";

const eslint = new ESLint({
  overrideConfig: [...baseConfig, ...reactConfig],
  overrideConfigFile: true,
});
const [result] = await eslint.lintText(
  "export const Example = () => <button disabled={true}>Go</button>;",
  { filePath: "component.jsx" },
);

assert.ok(result);
assert.equal(result.fatalErrorCount, 0);
assert.ok(
  result.messages.some(
    ({ ruleId }) => ruleId === "@eslint-react/kit/jsx-boolean-value",
  ),
);

const [typedResult] = await eslint.lintText(
  "export const example = () => { if (Promise.resolve(true)) return 1; return 0; };",
  { filePath: "test/react.ts" },
);

assert.ok(typedResult);
assert.equal(typedResult.fatalErrorCount, 0);
assert.ok(
  typedResult.messages.some(
    ({ ruleId }) => ruleId === "@typescript-eslint/no-misused-promises",
  ),
);

const [javascriptResult] = await eslint.lintText("missingGlobal();", {
  filePath: "component.js",
});

assert.ok(javascriptResult);
assert.equal(javascriptResult.fatalErrorCount, 0);
assert.ok(
  javascriptResult.messages.some(({ ruleId }) => ruleId === "no-undef"),
);
