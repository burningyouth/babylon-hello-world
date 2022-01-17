module.exports = {
    parser: "@typescript-eslint/parser", // add the TypeScript parser
    plugins: [
        "svelte3",
        "@typescript-eslint", // add the TypeScript plugin
    ],
    overrides: [
        // this stays the same
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
        },
    ],
    extends: ["eslint-config-silence", "plugin:@typescript-eslint/recommended"],
    rules: {
        "init-declarations": 0,
        "import/no-mutable-exports": 0,
        "no-undef": 0,
        "no-unused-vars": 0,
        "import/first": 0,
        "require-atomic-updates": 0,
    },
    settings: {
        "svelte3/typescript": () => require("typescript"), // pass the TypeScript package to the Svelte plugin
    },
};
