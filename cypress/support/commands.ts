// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************

/**
 * Create a custom command using Cypress
 */
declare namespace Cypress {
  interface Chainable<Subject = any> {
    addProduct(product: string): typeof addProduct;
  }
}
// Command Function
function addProduct(product: string): void {
  cy.visit('/'); // go to localhost:4200/
  // get input and type something
  cy.get('#product').type(product);
  // simulate click
  cy.get('button').click();
}

// Add Command
Cypress.Commands.add('addProduct', addProduct);

// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
