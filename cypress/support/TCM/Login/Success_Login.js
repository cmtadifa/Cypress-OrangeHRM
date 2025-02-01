import LoginPage from '../../pageObjects/LoginPage.js';


describe('Successfully Log In using Valid Credentials', () => {

  before(function() {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl); // URL from cypress config
    });

  beforeEach(function() {
    cy.fixture("Accounts/Login").then((data) => {
    this.data = data; // this.data is now accessible in your test block
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

    it('verify clicking Profile Dropdown', function () {
      LoginPage.clickingProfileDropdown();
    });

    it('verify clicking Logout button', function () {
      LoginPage.clickingLogoutBtn();
    });

    it('verify successfully logged out and verify Login URL Link', function () {
      // Verify login URL
      LoginPage.verifyLoginURL();
    });
  });
