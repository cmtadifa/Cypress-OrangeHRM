import pimPage from "../../pageObjects/pimPage";

describe('Add a Employee', () => {

  it('verify clicking Add Employee Button', function () {
    pimPage.verifyAddEmployeeBtn();
  });

  it('verify Add Employee Header', function () {
    pimPage.verifyAddEmployeeHeader();
  });

  it('verify Employee Full Name Label', function () {
    pimPage.verifyEmployeeFullNameLabel();
  });

  it('verify Enter Full Name', function () {
    pimPage.verifyFirstNameField();
  });

  it('verify Enter Middle Name', function () {
    pimPage.verifyMiddleNameField();
  });

  it('verify Enter Last Name', function () {
    pimPage.verifyLastNameField();
  });

  it('verify check Employee ID', function () {
    pimPage.verifyEmployeeIDField();
  });

  it('verify turning on the Switch', function () {
    pimPage.verifyLoginDetailsSwitch();
  });

  it('verify Login Details Username', function () {
    pimPage.verifyLoginUsername();
  });

  it('verify Login Details Status', function () {
    pimPage.verifyStatus("enabled");
  });

  it('verify a Password and Confirm a Password', function () {
    pimPage.verifyPassword();
  });

  it('verify Successfully creating Employee', function () {
    pimPage.verifySaveBtn();
  });

});
