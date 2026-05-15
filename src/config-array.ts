import type { Linter } from "eslint";

/**
 * A thin wrapper around a Linter.Config[] that adds a `with()` method.
 *
 * `with()` lets consumers override rules from plugins that are already
 * registered inside the shared config, without needing to re-install or
 * re-import those plugins.  ESLint v10 requires a plugin to be registered
 * in the same config object that references its rules; `with()` handles
 * that automatically by collecting every plugin from the wrapped array and
 * merging them into the appended override config object.
 *
 * The class implements Symbol.iterator so existing `...spread` usage
 * continues to work without any changes.
 *
 * @example
 * // Consumer eslint.config.js
 * import myConfig from "@sparticuz/eslint-config";
 *
 * export default [
 *   ...myConfig.with({
 *     rules: {
 *       "unicorn/no-null": "error",
 *       "@typescript-eslint/no-unused-vars": "error",
 *     },
 *   }),
 * ];
 */
export class ConfigArray {
  readonly #configs: Linter.Config[];

  constructor(configs: Linter.Config[]) {
    this.#configs = configs;
  }

  /** Merge all plugins from the wrapped config array into a single map. */
  #mergedPlugins(): NonNullable<Linter.Config["plugins"]> {
    const merged: NonNullable<Linter.Config["plugins"]> = {};
    for (const config of this.#configs) {
      if (config.plugins) {
        // Last registration wins for duplicate keys — consistent with ESLint's own config merge semantics.
        Object.assign(merged, config.plugins);
      }
    }
    return merged;
  }

  /**
   * Append one or more override config objects to this array.
   *
   * Every plugin already registered anywhere in the base config is
   * automatically merged into each override object so ESLint v10's
   * per-config-object plugin lookup works correctly.
   *
   * Returns a new ConfigArray (the original is not mutated), so calls
   * can be chained.
   */
  with(
    overrides: Linter.Config | Linter.Config[],
  ): ConfigArray {
    const plugins = this.#mergedPlugins();
    const overrideList = Array.isArray(overrides) ? overrides : [overrides];
    const merged = overrideList.map((override) => {
      const mergedPlugins = { ...plugins, ...override.plugins };
      return Object.keys(mergedPlugins).length > 0
        ? { ...override, plugins: mergedPlugins }
        : { ...override };
    });
    return new ConfigArray([...this.#configs, ...merged]);
  }

  /** Return the underlying array. */
  toArray(): Linter.Config[] {
    return [...this.#configs];
  }

  /** Spread support: `...myConfig` still works. */
  [Symbol.iterator](): Iterator<Linter.Config> {
    return this.#configs[Symbol.iterator]();
  }
}
