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

    it('verify Setting a time', function () {
        timePage.verifyTime();
    });
    
});