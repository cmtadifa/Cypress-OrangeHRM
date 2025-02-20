import timePage from '../../../support/pageObjects/timePage';

describe('My Records', () => {
    it('verify clicking My Records', function () {
        timePage.verifyClickingMyRecords();
    });

    it('verify Date of Records', function () {
        timePage.verifyDateofRecords();
    });

    it('verify clicking View Button', function () {
        timePage.verifyViewBtn();
    });

    it('verify total Time Hours', function () {
        timePage.verifytotalHrs();
    });

    it('verify total Number of Records Found', function () {
        timePage.verifyRecordText();
    });
});