import pimPage from "../../pageObjects/pimPage";

describe('Employee Personal Details', () => {

  it('verify Employee Name Details', function () {
    pimPage.verifyPersonalDetailsName();
  });

  it('verify Employee ID Details', function () {
    pimPage.verifyPersonalId();
  });

  it('verify Employee Liscense ID', function () {
    pimPage.verifyDriverLiscense();
  });

  it('verify Employee Nationality', function () {
    pimPage.verifyNationality("American");
  });

  it('verify Employee Marital Status', function () {
    pimPage.verifyMStatus("Single");
  });

  it('verify Employee Date of Birth', function () {
    pimPage.verifyDOB();
  });

  it('verify Employee Gender', function () {
    pimPage.verifyGender("Male");
  });

  it('verify Employee Details to be saved', function () {
    pimPage.verifyPDetailsSaveBtn("Male");
  });

  it('verify Employee Blood Type', function () {
    pimPage.verifyBType("O+");
  });

  it('verify Attaching a File', function () {
    pimPage.verifyattachFile();
  });
});