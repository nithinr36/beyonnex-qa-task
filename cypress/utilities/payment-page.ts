export const makePayment = (
  email: string,
  cardNumber: string,
  cardExpiry: string,
  cardCvv: string,
  billingZipCode: string,
  verifySuccess: boolean = true
) => {
  cy.getPaymentIframe()
    .find('.cardNumberInput #card_number')
    .click()
    .type(cardNumber);
  cy.getPaymentIframe().find('.emailInput #email').click().type(email);
  cy.getPaymentIframe()
    .find('.cardExpiresInput #cc-exp')
    .click()
    .type(cardExpiry);
  cy.getPaymentIframe().find('.cardCVCInput #cc-csc').click().type(cardCvv);
  cy.getPaymentIframe()
    .find('.zipCodeInput #billing-zip')
    .click()
    .type(billingZipCode);
  cy.getPaymentIframe().find('#submitButton').click();

  if (verifySuccess) {
    cy.get('.container', { timeout: 20000 })
      .should('contain.text', 'PAYMENT')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/FAILED|SUCCESS/);
      });
  }
};
