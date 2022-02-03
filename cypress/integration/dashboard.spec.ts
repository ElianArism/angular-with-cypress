describe('Cypress Tests', () => {
  it('Main url should contain /dashboard', () => {
    cy.visit('/'); // go to localhost:4200/
    cy.url().should('includes', '/dashboard');
  });

  it('Input value should be valid', () => {
    cy.visit('/'); // go to localhost:4200/
    // get input and type something
    cy.get('#product').type('toast');
    // simulate click
    cy.get('button').click();
    // case
    cy.url().should('not.include', 'dashboard');
  });

  it('input should be valid but using cy.commands option', () => {
    cy.addProduct('EscandinaviaConstantinopla'); // using custom command
    cy.url().should('includes', '/products');
  });
});
