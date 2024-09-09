import { titlebar } from '../../../../pageObjects/Posaucedemo/LoginPage.js';

describe('Standard User Tests', () => {
    beforeEach(function() {
      
      cy.fixture("FixSaucedemo/Accounts/Login").then((data) => {
        
        this.data = data; // `this.data` is now accessible in your test block
    });

      const baseUrl = Cypress.config('baseUrl');
      cy.visit(baseUrl); // URL from cypress config
    
    });
  
      it('should verify the title bar', function() {
        console.log('Username:', this.data.AccountUsers.user1.Username); // Debug: log username
        console.log('Password:', this.data.AccountUsers.Password); // Debug: log password
        titlebar(this.data.AccountUsers.user1.Username, this.data.Password); // Call the imported function
      });
  });