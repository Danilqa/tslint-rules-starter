# A starter project for creating rules for TSLint

Includes:
- Simple rule example
- Tests for this rule
- Sandbox for development
- Building configuration
- Jest expect methods

Main language: `TypeScript` \
Package manager: `yarn`

# Get started

`yarn install` - to install dependencies

# Scripts

* `dev` - runs the lint for sandbox
* `test` - runs rules tests
* `build` - compile project to dist folder

# How to use it in your consumer project

Delivery it to `node_modules` (as npm package or just copy) and configure `tslint.json` of your project.
```
{
    "rulesDirectory": [
        ...
        "node_modules/rules"
    ],
    "rules": {
        ...
        "no-multiline-ternary": true
    }
}
```

# Project structure

```
.
├── dist - Output folder, compiled rules will be there
├── helpers
│   └── linter.ts - Used for running linter in specs
├── rules - Rules and specs
├── sandbox.ts - Develop and test you rules here
├── tsconfig.dev.json - Config for running lint only for sandbox
├── tsconfig.json - TS configuration for current project
├── tsconfig.spec.json - TS configuration for jest
├── tslint.json - TS Lint configuration for current project
├── package.json
├── README.md
└── yarn.lock
```   

# Why do we have that dev dependencies?

* `@types/*` - contains type definitions for specific library.
* `jest` - testing framework to write unit specs.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `tslint` - it checks TypeScript code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
