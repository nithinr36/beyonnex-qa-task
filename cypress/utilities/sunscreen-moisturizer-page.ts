export const selectLeastExpensiveProduct = (productTypes: string[]): void => {
  let totalCheapestPrice: number = 0;
  let cheapestProducts: string[] = [];
  // Fetch all the product elements on the page
  productTypes.forEach((productType) => {
    cy.get('.text-center').then((products) => {
      // Initialize cheapest product trackers
      let cheapestProduct: any;
      let cheapestProductPrice: number = Number.MAX_SAFE_INTEGER;

      // Iterate over all products to find the cheapest SPF product
      products.each((index, product) => {
        const productName: string = Cypress.$(product)
          .find('.font-weight-bold')
          .text();
        const productDetails: string = Cypress.$(product).find('p').text();
        const productPriceString = productDetails.split(' ');
        const priceString = productPriceString[productPriceString.length - 1];
        const price = parseInt(priceString, 10);

        // Check if the product matches the specified SPF type and is cheaper than the current cheapest
        if (
          productName.toLowerCase().includes(productType.toLowerCase()) &&
          price < cheapestProductPrice
        ) {
          cheapestProduct = Cypress.$(product);
          cheapestProductPrice = price;
        }
      });
      // Storing the values, total price and cheapest products
      totalCheapestPrice += cheapestProductPrice;
      cheapestProducts.push(cheapestProduct.find('.font-weight-bold').text());
      // Adding the product to cart
      cheapestProduct.find('button').click();
      // Aliasing the price and product for verification against the values displayed on cart page
      cy.wrap(cheapestProducts).as('cheapestProducts');
      cy.wrap(totalCheapestPrice).as('totalCheapestPrice');
    });
  });
};

export const buyProduct = (item: 'moisturizer' | 'sunscreen') => {
  cy.get('button').contains(`Buy ${item}`).click();
};

export const goToCart = () => {
  cy.get('#cart').click();
};
