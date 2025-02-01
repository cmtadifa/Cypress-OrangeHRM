import { verifyDashboardPage } from "../../pageObjects/functionalities";
beforeEach(() => {
  // Clear cookies and local storage before each test
  cy.clearCookies();
  cy.clearLocalStorage();

});


describe('Verify Admin Dashboard', () => {
    verifyDashboardPage();
  });
