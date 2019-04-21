module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "airbnb",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "eslint(react/react-in-jsx-scope)": "off",
        "no-debugger": "off",
        "no-console": "off",
        "no-unused-vars": "warn",
        "react/prop-types": "warn",
        "eslint-disable-next-line": "on",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};