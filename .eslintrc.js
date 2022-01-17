module.exports = {
  parser: "@typescript-eslint/parser", // add the TypeScript parser
  parserOptions: {
    // add these parser options
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
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
