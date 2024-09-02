import { titlebar } from '../../../../pageObjects/Posaucedemo/LoginPage.js';


describe('Standard User Tests', () => {
    beforeEach(() => {
      const baseUrl = Cypress.config('baseUrl');
    
      cy.visit(baseUrl); // URL from cypress config
    });
  
    it('should verify the title bar', () => {
      titlebar(); // Call the imported function
    });
  });