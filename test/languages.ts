import baseConfig from "@sparticuz/eslint-config";
import cssConfig from "@sparticuz/eslint-config/css";
import jsonConfig from "@sparticuz/eslint-config/json";
import markdownConfig from "@sparticuz/eslint-config/markdown";
import reactConfig from "@sparticuz/eslint-config/react";
import yamlConfig from "@sparticuz/eslint-config/yaml";
import { ESLint } from "eslint";
import assert from "node:assert/strict";

const eslint = new ESLint({
  overrideConfig: [
    ...baseConfig,
    ...cssConfig,
    ...jsonConfig,
    ...markdownConfig,
    ...yamlConfig,
  ],
  overrideConfigFile: true,
});

for (const [filePath, source, rule] of [
  ["style.css", "a { transition: all 1s; }", "unicorn/no-transition-all"],
  ["data.json", '{"value": 1.0}', "unicorn/no-zero-fractions"],
  ["tsconfig.json", '// Comment\n{"value": 1.0}', "unicorn/no-zero-fractions"],
  [
    "notes.md",
    "# Notes\n\n[](https://example.com)\n",
    "unicorn/no-empty-link-text",
  ],
  ["MixedCase.md", "# Notes\n", "unicorn/filename-case"],
  ["settings.yaml", "value: 1.00\n", "unicorn/no-zero-fractions"],
  ["settings.yml", "value:\n", "yml/no-empty-mapping-value"],
] as const) {
  const [result] = await eslint.lintText(source, { filePath });
  assert.ok(result);
  assert.equal(result.fatalErrorCount, 0, JSON.stringify(result.messages));
  assert.ok(
    result.messages.some(({ ruleId }) => ruleId === rule),
    filePath,
  );
}

assert.equal(await eslint.isPathIgnored("package-lock.json"), true);

for (const config of [baseConfig, [...baseConfig, ...reactConfig]]) {
  const javascript = new ESLint({
    overrideConfig: [...config, { rules: { "no-undef": "error" } }],
    overrideConfigFile: true,
  });
  for (const extension of ["cjs", "mjs"]) {
    const [result] = await javascript.lintText(
      "module.exports = require('node:path'); exports.dir = __dirname; exports.file = __filename; missingGlobal();",
      { filePath: `postcss.config.${extension}` },
    );
    assert.ok(result);
    assert.equal(result.fatalErrorCount, 0, JSON.stringify(result.messages));
    const undefinedNames = result.messages
      .filter(({ ruleId }) => ruleId === "no-undef")
      .map(({ message }) => message);
    assert.deepEqual(
      undefinedNames,
      (extension === "cjs" ?
        ["missingGlobal"]
      : [
          "module",
          "require",
          "exports",
          "__dirname",
          "exports",
          "__filename",
          "missingGlobal",
        ]
      ).map((name) => `'${name}' is not defined.`),
    );
  }
}
