module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true

    },
    "globals": {
        "process": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-array-index-key": "warn",
        "no-console": "off",
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "quotes": "off",
        "semi": [
            "error",
            "never"
        ]
    }
}