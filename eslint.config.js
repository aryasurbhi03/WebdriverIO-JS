import { config as wdioConfig } from "eslint-plugin-wdio";

export default [
    {
        plugin:["wdio" 
        ],
        extends: [
            wdioConfig["flat/recommended","eslint/recommended"],
        ],
        parserOptions: {
            ecmaVersion:"latest",
            sourceType: "module"
        },
        env: {
            es6: true,
            mocha: true,
            node: true
        }
    }
];