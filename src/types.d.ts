declare module "eslint-plugin-array-func" {
  const plugin: {
    configs: {
      all: import("eslint").Config;
      recommended: import("eslint").Config;
    };
  };
  export = plugin;
}

declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  const recommended: import("eslint").Config;
}
declare module "eslint-plugin-no-unsanitized" {
  const configs: {
    recommended: import("eslint").Config;
  };
}
declare module "eslint-plugin-promise" {
  const configs: {
    "flat/recommended": import("eslint").Config;
  };
}
declare module "@next/eslint-plugin-next" {
  const plugin: {
    configs: {
      "core-web-vitals": import("eslint/config").Config;
      recommended: import("eslint/config").Config;
    };
  };
  export default plugin;
}
