import LoginPage from '../../pageObjects/LoginPage.js';


describe('Successfully Log In using Valid Credentials', () => {

  before(function() {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    });

  beforeEach(function() {
    cy.fixture("Accounts/Login").then((data) => {
    this.data = data; 
    });
  });


    it('verify enter a Valid Username', function () {
      const { Username } = this.data.Success;
      LoginPage.testUsernameField(Username);
    });

    it('verify enter a Valid Password', function () {
      const { Password } = this.data.Success;
      LoginPage.testPasswordField(Password);
    });

    it('verify clicking Submit Button', function () {
      LoginPage.testclickSubmitBtn();
    });

    it('verify successfully Log-In', function () {
      LoginPage.verifyDashboardURL();
    });

  });
