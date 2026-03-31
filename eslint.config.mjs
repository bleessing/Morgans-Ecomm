import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tseslint.configs.strict,
  {
    rules: {
      // TypeScript сам проверяет undefined переменные
      "no-undef": "off",

      // Качество кода
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "warn",
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],

      // TypeScript strict
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",

      // React
      "react/self-closing-comp": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
