describe('Products Spec', () => {
  it('Should move to /products and back to /dashboard', () => {
    cy.visit('/');
    cy.get('header a').eq(1).click();
    cy.url().should('contain', '/products');
    cy.get('header a').eq(0).click();
    cy.url().should('contain', '/dashboard');
  });
});
