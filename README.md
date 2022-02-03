# Angular e2e with Cypress

## Commands

```
  npm run cypress:open // Open cypress in an electron container with your admin panel
```

```
  npm run cypress:run // Run all tests automatically by console
```

## Specifications of an angular project with Cypress

To add Cypress to a project, run `ng add @cypress/schematic`.
This will create a `cypress` folder and its configuration files, as well as add
a couple of commands to the `package.json`

Within that folder three sub-directories will be created

- Integration, where the tests will be written
- Plugins, where plugins will be installed if necessary
- Support, where you can declare and export your own functions with global tests to use
