module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "rules": {
        "eqeqeq": 0,
        "semi": [
            2, "always"
        ],
        "import/first": 0,
        "max-len": [
            1, {
                "code": 200
            }
        ],
        "no-unused-vars": 1,
        "global-require": 0,
        "prefer-destructuring": 0,
        "class-methods-use-this": 0,
        "react/no-unused-state": 1,
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "quotes": ["error", "double"],
        "semi-style": ["error", "last"],
        "linebreak-style": 0
    }
};