import timePage from '../../../support/pageObjects/timePage';

describe('Punch In and Out', () => {

    it('verify clicking Punch In/Out', function () {
        timePage.verifyClickingCPunchInOut();
    });

    it('verify Date today', function () {
        timePage.verifyDate();
    });

    it('verify Setting a time', function () {
        timePage.verifyTime();
    });

    it('verify adding a note', function () {
        timePage.verifyNoteTxtArea();
    });

    it('verify Punching In', function () {
        timePage.verifyPunchIn();
    });

    it('verify Punched In Time', function () {
        timePage.verifyPunchedInText();
    });

    it('verify Punched In Note', function () {
        timePage.verifyPunchedInNote();
    });
    
    it('verify Punching Out', function () {
        timePage.verifyPunchIn();
    });

});