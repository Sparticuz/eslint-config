declare module "eslint-plugin-array-func" {
  const configs: {
    all: Linter.Config;
    recommended: Linter.Config;
  };
}
declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  const recommended: Linter.Config;
}
declare module "eslint-plugin-import" {
  const flatConfigs: {
    electron: Linter.Config;
    errors: Linter.Config;
    react: Linter.Config;
    "react-native": Linter.Config;
    recommended: Linter.Config;
    typescript: Linter.Config;
    warnings: Linter.Config;
  };
}
declare module "eslint-plugin-no-unsanitized" {
  const configs: {
    recommended: Linter.Config;
  };
}
declare module "eslint-plugin-promise" {
  const configs: {
    "flat/recommended": Linter.Config;
  };
}
