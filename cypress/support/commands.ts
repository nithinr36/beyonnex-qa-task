Cypress.Commands.add('getPaymentIframe', () => {
  return cy
    .get('iframe')
    .its('0.contentDocument')
    .then((body) => cy.wrap(body));
});

Cypress.on('uncaught:exception', () => false);

declare namespace Cypress {
  interface Chainable {
    getPaymentIframe();
  }
}
