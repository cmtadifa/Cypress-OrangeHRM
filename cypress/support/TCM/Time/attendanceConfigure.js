import timePage from '../../../support/pageObjects/timePage';

describe('Attendance Configure', () => {

    it('verify clicking Configuration', function () {
        timePage.verifyClickingConfiguration();
    });

    // it('verify toggle On', function () {
    //     timePage.verifyToggleOn();
    // });

    it.skip('verify clicking Punch In/Out', function () {
        timePage.verifyClickingCPunchInOut();
    });

    it.skip('verify Date today', function () {
        timePage.verifyDate();
    });

    it.skip('verify Setting a time', function () {
        timePage.verifyTime();
    });

    it.skip('verify adding a note', function () {
        timePage.verifyNoteTxtArea();
    });

    it.skip('verify Punching In', function () {
        timePage.verifyPunchIn();
    });

    it.skip('verify Date Record', function () {
        timePage.verifyTxt();
    });
    
});