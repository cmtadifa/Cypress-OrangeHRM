import LoginPage from '../../../support/pageObjects/LoginPage';
import sideBarPage from '../../../support/pageObjects/sideBarPage';

describe('Punch In and Punch Out', () => {

    LoginPage.testSuccessfullyLogIn();
    sideBarPage.clickTimeBtn();
    
});