import { titlebar } from '../../../../pageObjects/Posaucedemo/LoginPage.js';


describe('Standard User Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/'); // Adjust the URL as needed
    });
  
    it('should verify the title bar', () => {
      titlebar(); // Call the imported function
    });
  });