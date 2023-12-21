export const checkHotTemperatureAndRefresh = () => {
  cy.get('#temperature').then(($temperature: JQuery<HTMLElement>) => {
    const temperature: number = parseFloat($temperature.text().trim());
    if (temperature < 34) {
      cy.reload();
      checkHotTemperatureAndRefresh();
    }
  });
};

export const checkColdTemperatureAndRefresh = () => {
  cy.get('#temperature').then(($temperature: JQuery<HTMLElement>) => {
    const temperature: number = parseFloat($temperature.text().trim());
    if (temperature > 19) {
      cy.reload();
      checkColdTemperatureAndRefresh();
    }
  });
};
