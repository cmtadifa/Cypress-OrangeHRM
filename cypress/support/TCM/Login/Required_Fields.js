import LoginPage from '../../pageObjects/LoginPage.js';


describe('verify Required Fields', () => {
  
  before(function() {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    });
    
    it('verify Username Field', function () {
      LoginPage.verifyUsernameField();
    });

    it('verify Password Field', function () {
      LoginPage.verifyPasswordField();
    });

    it('verify clicking Submit Button', function () {
      LoginPage.testclickSubmitBtn();
    });

    it('verify Username border color', function () {
      LoginPage.verifyUsernameBorderClr();
    });

    it('verify Username required error text', function () {
      LoginPage.verifyUsernameRqrderrorText();
    });

    it('verify Password border color', function () {
      LoginPage.verifyPasswordBorderClr();
    });

    it('verify Password required error text', function () {
      LoginPage.verifyPasswordRqrderrorText();
    });
    
  });
