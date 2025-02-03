import { faker } from '@faker-js/faker';

const PIMselectors = {
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
 saveBtn: '.orangehrm-left-space'
}
  
const firstName = faker.name.firstName();
const middleName = faker.name.middleName();
const lastName = faker.name.lastName();

class pimPage {
    static verifyAddEmployeeBtn(){
        cy.get(PIMselectors.navTab).eq(2)
            .should('be.visible')
            .click();
    }

    static verifyAddEmployeeHeader(){
        cy.get(PIMselectors.addEmployeeHeader)
            .should('be.visible')
            .should('have.text', "Add Employee");
    }

    static verifyEmployeeFullNameLabel(){
        cy.get(PIMselectors.nameBox)
            .find(PIMselectors.employeeLable)
            .should('be.visible')
            .should('have.text', "Employee Full Name");
    }

    static verifyFirstNameField(){
        cy.get(PIMselectors.firstnameField)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'First Name')
            .type(firstName);
      }

    static verifyMiddleNameField(){
        cy.get(PIMselectors.middlenameField) 
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Middle Name')
            .type(middleName);
      }

    static verifyLastNameField(){
        cy.get(PIMselectors.lastnameField) 
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Last Name')
            .type(lastName);
      }

    static verifyEmployeeIDField(){
        cy.get(PIMselectors.employeeBox).eq(0)
            .find(PIMselectors.employeeLable)
            .should('be.visible')
            .should('have.text', "Employee Id");

        cy.get(PIMselectors.employeeBox).eq(0)
            .find(PIMselectors.textField)
            .should('be.visible')
            .invoke('val') 
            .should('not.be.empty'); 
      }

    static verifyLoginDetailsSwitch(){
        cy.get(PIMselectors.textSwitch)
            .should('have.text', "Create Login Details");
        cy.get(PIMselectors.detailsSwitch)
            .should('be.visible')
            .click();
    }

    static verifyLoginUsername(){
        cy.get(PIMselectors.employeeBox).eq(1)
            .find(PIMselectors.employeeLable).eq(0)
            .should('have.text', "Username")
            
        cy.get(PIMselectors.employeeBox).eq(1)    
            .find(PIMselectors.detailsTextFieldSwitch)
            .type(firstName+lastName);
    }

    static verifyLoginStatus(){
        cy.get(PIMselectors.employeeBox).eq(1)
            .find(PIMselectors.employeeLable).eq(1)
            .should('have.text', "Status")
            
        cy.get(PIMselectors.employeeBox).eq(1)    
            .find(PIMselectors.detailsTextFieldSwitch)
            .type(firstName+lastName);
    }
    
    static verifyStatus(status){
        if(status === "enabled"){
            cy.get(PIMselectors.statusRadioBtn).eq(0)
                .click();
        }else{
            cy.get(PIMselectors.statusRadioBtn).eq(1)
                .click();
        }
    }

    static verifyPassword(){
        const passLetters = faker.string.alpha(5);
        const passNumbers = faker.number.int({ min: 100, max: 999 })

        cy.get(PIMselectors.employeeBox).eq(2)
            .find(PIMselectors.employeeLable).eq(0)
            .should('have.text', "Password")

        cy.get(PIMselectors.employeeBox).eq(2)
            .find(PIMselectors.detailsTextFieldSwitch).eq(0)
            .type(passLetters+passNumbers)
            .invoke('val')
            .as('firstPassWord');

        cy.get(PIMselectors.employeeBox).eq(2)
            .find(PIMselectors.employeeLable).eq(1)
            .should('have.text', "Confirm Password")

        cy.get('@firstPassWord').then((firstPasswordValue) => { 
            cy.get(PIMselectors.employeeBox).eq(2)
                .find(PIMselectors.detailsTextFieldSwitch).eq(1)
                .type(firstPasswordValue) 
                .invoke('val') 
                .then((secondPassword) => {
                expect(secondPassword).to.equal(firstPasswordValue);
                });
        });
    }

    static verifySaveBtn(){
        cy.get(PIMselectors.saveBtn)
            .should('to.be.visible')
            .click();
    }

    static testAddEmployee(){
        require('../TCM/Pim/addEmployee.js');
    }
}

export default pimPage;
  