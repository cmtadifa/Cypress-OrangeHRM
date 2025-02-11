import LoginPage from '../../../support/pageObjects/LoginPage';
import sideBarPage from '../../../support/pageObjects/sideBarPage';
import timePage from '../../../support/pageObjects/timePage';

describe('Punch In and Punch Out', () => {

    LoginPage.testSuccessfullyLogIn();
    sideBarPage.clickTimeBtn();
    timePage.verifyAttendance();
    
});