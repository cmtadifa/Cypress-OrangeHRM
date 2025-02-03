import LoginPage from '../../../support/pageObjects/LoginPage.js';
import sideBarPage from '../../../support/pageObjects/sideBarPage.js';
import pimPage from '../../../support/pageObjects/pimPage.js';


describe('adding a New Employee', () => {

    LoginPage.testSuccessfullyLogIn();
    sideBarPage.clickPIMBtn();
    pimPage.testAddEmployee();
    
});
