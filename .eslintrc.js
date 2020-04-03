module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["react"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:json/recommended",
  ],

  rules: {
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "no-irregular-whitespace": [0],
    "react/prop-types": [0],
    "react/react-in-jsx-scope": "error",
  },
}
