import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      ".now/**",
      ".changeset/**",
      "coverage/**",
      "dist/**",
      "esm/**",
      "public/**",
      "scripts/**",
      "tests/**",
      "*.css",
      "*.config.js",
      ".DS_Store",
      "next-env.d.ts",
    ],
  },
  ...compat.config({
    env: {
      browser: false,
      es2021: true,
      node: true,
    },
    extends: [
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
    ],
    plugins: [
      "react",
      "unused-imports",
      "import",
      "@typescript-eslint",
      "jsx-a11y",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "prettier/prettier": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
    },
  }),
  nextPlugin.configs.recommended,
];
