import LoginPage from '../../../pageObjects/LoginPage.js';


describe('Standard User Tests', () => {
    beforeEach(function() {
      cy.fixture("Accounts/Login").then((data) => {
        this.data = data; // `this.data` is now accessible in your test block
    });

    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    
    });
  
    
    it('should successfully login with valid credentials', function () {
      const { Username, Password } = this.data.Success; // Access the "Success" data
      LoginPage.verifyLoginForm(Username, Password); // Use the data in the login function
  
      // Add assertions to verify successful login
      cy.url().should('include', '/dashboard'); // Example assertion
    });
  });
