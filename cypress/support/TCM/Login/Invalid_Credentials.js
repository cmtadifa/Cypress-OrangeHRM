import LoginPage from '../../../pageObjects/LoginPage.js';


describe('Invalid Credentials', () => {
    beforeEach(function() {
      cy.fixture("Accounts/Login").then((data) => {
        this.data = data; // `this.data` is now accessible in your test block
    });

    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    
    });
  
    
    it('should display Invalid credentials error message', function () {
      const { Username, Password } = this.data.Failed; // Access the "Success" data
      LoginPage.verifyInvalidCredentials(Username, Password); // Use the data in the login function
  
    });
  });
