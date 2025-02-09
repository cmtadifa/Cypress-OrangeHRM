import { faker } from '@faker-js/faker';

const PIMselectors = {
    calendar:{
        calendarhdr: '.oxd-calendar-header',
        leftArw:'.oxd-icon.bi-chevron-left',
        rightArw:'.oxd-icon.bi-chevron-right',
        monthSelector: '.oxd-calendar-selector-month',
        yearSelector: '.oxd-calendar-selector-year',
        dayWrapper: '.oxd-calendar-date-wrapper',
        daySelector: '.oxd-calendar-date'
    },
    addEmp:{
        navTab: '.oxd-topbar-body-nav-tab',
        addEmployeeHeader: '.orangehrm-main-title',
        nameBox: '.oxd-grid-1',
        employeeLable: '.oxd-label',
        firstnameField: '.orangehrm-firstname',
        middlenameField: '.orangehrm-middlename',
        lastnameField: '.orangehrm-lastname',
        employeeBox: '.oxd-grid-2',
        textField: '.oxd-input',
        textSwitch: '.user-form-header-text',
        detailsSwitch: '.oxd-switch-input',
        detailsTextFieldSwitch: '.oxd-input',
        statusRadioBtn: '.oxd-radio-input',
        saveBtn: '.orangehrm-left-space',
        successModal: '.oxd-toast-container',
    },
    empPDetails:{
        namePDetails: '.orangehrm-edit-employee-name',
        boxPDetails: '.oxd-form-row',
        labelPDetails: '.oxd-label',
        firstnamePDetails: '.orangehrm-firstname',
        middlenamePDetails: '.orangehrm-middlename',
        lastnamePDetails: '.orangehrm-lastname',
        textFieldPDetails: '.oxd-input',
        calendarPDetails: '.oxd-date-wrapper',
        dropDownArrowPDetails: '.oxd-select-text--after',
        dropDownListBoxPDetails: '.oxd-select-option',
        radioBtnPDetails: '.oxd-radio-input',
        saveBtnPDetails: '.orangehrm-left-space',
        attchmentAddBtnPDetails: '.oxd-button--text',
        attchFilePDetails: '.oxd-file-input-icon'
    }
}

const firstName = faker.name.firstName();
const middleName = faker.name.middleName();
const lastName = faker.name.lastName();
const alphaNum = faker.string.alphanumeric(7);
const randomNum = faker.number.int({ min: 1, max: 31 });

class pimPage {
    static verifyAddEmployeeBtn(){
        cy.get(PIMselectors.addEmp.navTab).eq(2)
            .should('be.visible')
            .click();
    }

    static verifyAddEmployeeHeader(){
        cy.get(PIMselectors.addEmp.addEmployeeHeader)
            .should('be.visible')
            .should('have.text', "Add Employee");
    }

    static verifyEmployeeFullNameLabel(){
        cy.get(PIMselectors.addEmp.nameBox)
            .find(PIMselectors.addEmp.employeeLable)
            .should('be.visible')
            .should('have.text', "Employee Full Name");
    }

    static verifyFirstNameField(){
        cy.get(PIMselectors.addEmp.firstnameField)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'First Name')
            .type(firstName);
      }

    static verifyMiddleNameField(){
        cy.get(PIMselectors.addEmp.middlenameField) 
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Middle Name')
            .type(middleName);
      }

    static verifyLastNameField(){
        cy.get(PIMselectors.addEmp.lastnameField) 
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Last Name')
            .type(lastName);
      }

    static verifyEmployeeIDField(){
        cy.get(PIMselectors.addEmp.employeeBox).eq(0)
            .find(PIMselectors.addEmp.employeeLable)
            .should('be.visible')
            .should('have.text', "Employee Id");

        cy.get(PIMselectors.addEmp.employeeBox).eq(0)
            .find(PIMselectors.addEmp.textField)
            .should('be.visible')
            .invoke('val') 
            .should('not.be.empty'); 
      }

    static verifyLoginDetailsSwitch(){
        cy.get(PIMselectors.addEmp.textSwitch)
            .should('have.text', "Create Login Details");
        cy.get(PIMselectors.addEmp.detailsSwitch)
            .should('be.visible')
            .click();
    }

    static verifyLoginUsername(){
        cy.get(PIMselectors.addEmp.employeeBox).eq(1)
            .find(PIMselectors.addEmp.employeeLable).eq(0)
            .should('have.text', "Username")
            
        cy.get(PIMselectors.addEmp.employeeBox).eq(1)    
            .find(PIMselectors.addEmp.detailsTextFieldSwitch)
            .type(firstName+lastName);
    }

    static verifyLoginStatus(){
        cy.get(PIMselectors.addEmp.employeeBox).eq(1)
            .find(PIMselectors.addEmp.employeeLable).eq(1)
            .should('have.text', "Status")
            
        cy.get(PIMselectors.addEmp.employeeBox).eq(1)    
            .find(PIMselectors.addEmp.detailsTextFieldSwitch)
            .type(firstName+lastName);
    }
    
    static verifyStatus(status){
        if(status === "enabled"){
            cy.get(PIMselectors.addEmp.statusRadioBtn).eq(0)
                .click();
        }else{
            cy.get(PIMselectors.addEmp.statusRadioBtn).eq(1)
                .click();
        }
    }

    static verifyPassword(){
        const passLetters = faker.string.alpha(5);
        const passNumbers = faker.number.int({ min: 100, max: 999 })

        cy.get(PIMselectors.addEmp.employeeBox).eq(2)
            .find(PIMselectors.addEmp.employeeLable).eq(0)
            .should('have.text', "Password")

        cy.get(PIMselectors.addEmp.employeeBox).eq(2)
            .find(PIMselectors.addEmp.detailsTextFieldSwitch).eq(0)
            .type(passLetters+passNumbers)
            .invoke('val')
            .as('firstPassWord');

        cy.get(PIMselectors.addEmp.employeeBox).eq(2)
            .find(PIMselectors.addEmp.employeeLable).eq(1)
            .should('have.text', "Confirm Password")

        cy.get('@firstPassWord').then((firstPasswordValue) => { 
            cy.get(PIMselectors.addEmp.employeeBox).eq(2)
                .find(PIMselectors.addEmp.detailsTextFieldSwitch).eq(1)
                .type(firstPasswordValue) 
                .invoke('val') 
                .then((secondPassword) => {
                expect(secondPassword).to.equal(firstPasswordValue);
                });
        });
    }

    static verifySaveBtn(){
        cy.get(PIMselectors.addEmp.saveBtn)
            .should('to.be.visible')
            .click();

        cy.get(PIMselectors.addEmp.successModal)
            .should('to.be.visible')
    }

// employee personal details
    static verifyPersonalDetailsName() {
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(0)
            .find(PIMselectors.empPDetails.labelPDetails).eq(0)
            .should('be.visible')
            .should('have.text', "Employee Full Name");

        cy.get(PIMselectors.empPDetails.firstnamePDetails)
            .invoke('val')
            .as('fName');

        cy.get(PIMselectors.empPDetails.middlenamePDetails)
            .should('to.be.visible');

        cy.get(PIMselectors.empPDetails.lastnamePDetails)
            .invoke('val')
            .as('lName');

        cy.get('@fName').then((fNameValue) => {
            cy.get('@lName').then((lNameValue) => {
                cy.get(PIMselectors.empPDetails.namePDetails)
                    .should('have.text', `${fNameValue} ${lNameValue}`);
            });
        });
    }

    static verifyPersonalId() {
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.labelPDetails).eq(0)
            .should('be.visible')
            .should('have.text', "Employee Id");

        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.textFieldPDetails).eq(0)
            .invoke('val')
            .should('not.be.empty');

        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.textFieldPDetails).eq(1)
            .invoke('val')
            .then((empOtherId) => {
                if(empOtherId === ""){
                    cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
                        .find(PIMselectors.empPDetails.textFieldPDetails).eq(1)
                        .type(alphaNum);
                }
            });

    }

    static verifyDriverLiscense(){
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.labelPDetails).eq(2)
            .should('be.visible')
            .should('have.text', "Driver's License Number");

        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.textFieldPDetails).eq(2)
            .type(alphaNum.toUpperCase());

        cy.get(PIMselectors.empPDetails.boxPDetails).eq(1)
            .find(PIMselectors.empPDetails.calendarPDetails).eq(0)
            .click();
            cy.get(PIMselectors.calendar.calendarhdr)
                .find(PIMselectors.calendar.rightArw)
                .click();
                cy.get(PIMselectors.calendar.dayWrapper)
                    .contains(randomNum)
                    .click();
    }

    static verifyNationality(nationality){
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(2)
            .find(PIMselectors.empPDetails.dropDownArrowPDetails).eq(0)
            .click()
        cy.get(PIMselectors.empPDetails.dropDownListBoxPDetails)
            .contains(nationality)
            .click();
    }

    static verifyMStatus(status){
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(2)
            .find(PIMselectors.empPDetails.dropDownArrowPDetails).eq(1)
            .click()
        cy.get(PIMselectors.empPDetails.dropDownListBoxPDetails)
            .contains(status)
            .click();
    }

    static verifyDOB(){
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(2)
            .find(PIMselectors.empPDetails.labelPDetails).eq(2)
            .should('be.visible')
            .should('have.text', "Date of Birth");

        cy.get(PIMselectors.empPDetails.boxPDetails).eq(2)
            .find(PIMselectors.empPDetails.calendarPDetails).eq(0)
            .click();
            cy.get(PIMselectors.calendar.calendarhdr)
                .find(PIMselectors.calendar.yearSelector)
                .click()
                .contains("1990")
                .click();
                cy.get(PIMselectors.calendar.dayWrapper)
                    .contains(randomNum)
                    .click();
    }

    static verifyGender(status){
        if(status === "Male"){
            cy.get(PIMselectors.addEmp.statusRadioBtn).eq(0)
                .click();
        }else{
            cy.get(PIMselectors.addEmp.statusRadioBtn).eq(1)
                .click();
        }
    }

    static verifyPDetailsSaveBtn(){
        cy.get(PIMselectors.empPDetails.saveBtnPDetails).eq(0)
            .should('to.be.visible')
            .click();

        cy.get(PIMselectors.addEmp.successModal)
            .should('to.be.visible');
    }

    static verifyBType(Btype){
        cy.get(PIMselectors.empPDetails.boxPDetails).eq(3)
            .find(PIMselectors.empPDetails.dropDownArrowPDetails).eq(0)
            .click()
        cy.get(PIMselectors.empPDetails.dropDownListBoxPDetails)
            .contains(Btype)
            .click();
    }

    static verifyattachFile(){
        cy.get(PIMselectors.empPDetails.attchmentAddBtnPDetails)
            .click()

            cy.fixture('Images/dubai.jpeg', 'base64').then((fileContent) => {
                cy.get('input[type="file"]').selectFile({
                  contents: Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg'),
                  fileName: 'dubai.jpeg',
                  mimeType: 'image/jpeg',
                });
              });
    }

    // wrapper function
    static testAddEmployee(){
        require('../TCM/Pim/addEmployee.js');
        require('../TCM/Pim/employeePersonalDetails.js');
    }
}

export default pimPage;
