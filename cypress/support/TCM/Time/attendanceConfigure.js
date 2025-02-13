import timePage from '../../../support/pageObjects/timePage';

describe('Attendance Configure', () => {

    it('verify clicking Configuration', function () {
        timePage.verifyClickingConfiguration();
    });

    // it('verify toggle On', function () {
    //     timePage.verifyToggleOn();
    // });

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
    
});