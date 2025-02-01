import LoginPage from '../../pageObjects/LoginPage.js';


describe('Unsuccessfully Login using Invalid Credentials', () => {
  
  before(function() {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    });

  beforeEach(function() {
    cy.fixture("Accounts/Login").then((data) => {
    this.data = data; // this.data is now accessible in your test block
    });
  });
  
    
    it('verify enter a Invalid Username', function () {
      const { Username } = this.data.Failed;
      LoginPage.testUsernameField(Username);
    });

    it('verify enter a Invalid Password', function () {
      const { Password } = this.data.Failed;
      LoginPage.testPasswordField(Password);
    });

    it('verify clicking Submit Button', function () {
      LoginPage.testclickSubmitBtn();
    });

    it('verify error Box', function () {
      LoginPage.verifyerrorBox();
    });

    it('verify error Text', function () {
      LoginPage.verifyerrorText();
    });

  });
