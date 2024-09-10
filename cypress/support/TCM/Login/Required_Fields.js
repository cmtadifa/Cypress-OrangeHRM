import LoginPage from '../../../pageObjects/LoginPage.js';


describe('Invalid Credentials', () => {
  
  beforeEach(function() {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config

  });
    
    it('should display Required Fields error message', function () {

      LoginPage.verifyRequiredfields(); // Use the data in the login function
  
    });
    
  });
