import { makePayment } from '../utilities/payment-page';
import { cardDetails } from '../fixtures/paymentTestData';
import {
  buyProduct,
  goToCart,
  selectLeastExpensiveProduct,
} from '../utilities/sunscreen-moisturizer-page';
import {
  checkHotTemperatureAndRefresh,
  checkColdTemperatureAndRefresh,
} from '../utilities/home-page';
import {
  payByCard,
  verifyCartItemsAndTotalPrice,
  verifyNumberOfCartItems,
} from '../utilities/cart-page';

describe('Weather Shopper Automation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should check the temperature and purchase sunscreen if it is hot', () => {
    checkHotTemperatureAndRefresh();
    buyProduct('sunscreen');
    selectLeastExpensiveProduct(['SPF-50', 'SPF-30']);
    goToCart();
    verifyNumberOfCartItems(2);
    verifyCartItemsAndTotalPrice();
    payByCard();
    makePayment(
      cardDetails.email,
      cardDetails.cardNumber,
      cardDetails.cardExpiry,
      cardDetails.cardCvv,
      cardDetails.billingZipCode
    );
  });

  it('Should check the temperature and purchase moisturizer if it is cold', () => {
    checkColdTemperatureAndRefresh();
    buyProduct('moisturizer');
    selectLeastExpensiveProduct(['Aloe', 'Almond']);
    goToCart();
    verifyNumberOfCartItems(2);
    verifyCartItemsAndTotalPrice();
    payByCard();
    makePayment(
      cardDetails.email,
      cardDetails.cardNumber,
      cardDetails.cardExpiry,
      cardDetails.cardCvv,
      cardDetails.billingZipCode
    );
  });
});
