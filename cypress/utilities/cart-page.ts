export const verifyNumberOfCartItems = (totalItems: number) => {
  cy.get('.table tbody').children().should('have.length', totalItems);
};

export const payByCard = () => {
  cy.get('.stripe-button-el').click();
};

export const verifyCartItemsAndTotalPrice = () => {
  cy.get('@cheapestProducts').each((cheapestProduct) => {
    cy.get('.table').should('include.text', cheapestProduct);
  });

  cy.get('@totalCheapestPrice').then((totalCheapestPrice) => {
    cy.get('.row .justify-content-center').contains(
      totalCheapestPrice.toString()
    );
  });
};
