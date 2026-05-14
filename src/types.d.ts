declare module "eslint-plugin-array-func" {
  const plugin: {
    configs: {
      all: import("eslint").Linter.Config;
      recommended: import("eslint").Linter.Config;
    };
  };
  export = plugin;
}

declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  const recommended: import("eslint").Linter.Config;
}
declare module "eslint-plugin-no-unsanitized" {
  const configs: {
    recommended: import("eslint").Linter.Config;
  };
}
declare module "eslint-plugin-promise" {
  const configs: {
    "flat/recommended": import("eslint").Linter.Config;
  };
}
