import { titlebar } from '../../../../pageObjects/Posaucedemo/LoginPage.js';


describe('Standard User Tests', () => {
    beforeEach(function() {
      cy.fixture("FixSaucedemo/Accounts/Login").then((data) => {
              this.data = data; // `this.data` is now accessible in your test block
    });

      const baseUrl = Cypress.config('baseUrl');
      cy.visit(baseUrl); // URL from cypress config
    
    });
  
    it('should verify the title bar', () => {
      titlebar(this.data.user1,this.data.Password); // Call the imported function
    });

    
  });
