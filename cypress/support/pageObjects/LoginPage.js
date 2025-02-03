const selectors = {
  username: '[name="username"]',
  password: '[name  ="password"]',
  submitButton: '[type="submit"]',
  profileDropdown: '.oxd-icon.bi-caret-down-fill',
  dropdownList: '.oxd-userdropdown-link',
  errorBox: '.oxd-alert.oxd-alert--error',
  errorText: '.oxd-text.oxd-text--p.oxd-alert-content-text',
  inputField: '.oxd-input-group.oxd-input-field-bottom-space',
  errorRequiredText: '.oxd-input-group__message'
}

class LoginPage {
//valid credentials
      static testUsernameField(Username){
        cy.get(selectors.username) // username form
          .should('be.visible')
          .should('have.attr', 'placeholder', 'Username')
          .type(Username);
      }

      static testPasswordField(Password){
        cy.get(selectors.password) // password form
          .should('be.visible')
          .should('have.attr', 'placeholder', 'Password')
          .type(Password);
      }
        
      static testclickSubmitBtn(){
        cy.get(selectors.submitButton) // submit button
          .should('be.visible')
          .click();
      }
        
      static verifyDashboardURL(){
        cy.url().should('include', '/dashboard');
      }
        
      static verifyclickingProfileDropdown(){
        cy.get(selectors.profileDropdown) // submit button
          .should('be.visible')
          .click();
      }

      static verifyclickingLogoutBtn(){
        cy.get(selectors.dropdownList).eq(3) // submit button
          .should('be.visible')
          .click();
      }
        
      static verifyLoginURL(){
        cy.url().should('include', '/web/index.php/auth/login');
      }

//Invalid credentials
    static verifyerrorBox(){
      cy.get(selectors.errorBox)
        .should('be.visible');
    }

    static verifyerrorText(){
      cy.get(selectors.errorText)
      .should('be.visible')
      .should('have.text','Invalid credentials');
    }
     
// Required fields
    static verifyUsernameField(){
      cy.get(selectors.username) // username form
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Username')
    }

    static verifyPasswordField(){
      cy.get(selectors.password) // password form
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Password')
    }

    static verifyUsernameBorderClr(){
      cy.get(selectors.username) // username form
      .should('be.visible')
      .should('have.css', 'border', '1px solid rgb(235, 9, 16)');
    }
      
    static verifyUsernameRqrderrorText(){
      cy.get(selectors.inputField)
        .eq(0)
        .find(selectors.errorRequiredText) 
        .should('be.visible')
        .should('have.text', 'Required');
    }

    static verifyPasswordBorderClr(){
      cy.get(selectors.password) // password form
        .should('be.visible')
        .should('have.css', 'border', '1px solid rgb(235, 9, 16)');
    }

    static verifyPasswordRqrderrorText(){
      cy.get(selectors.inputField)
        .eq(1)
        .find(selectors.errorRequiredText)
        .should('be.visible')
        .should('have.text', 'Required');
    }

    static testLoginScenario(){
      require('../TCM/Login/Success_Login.js');
      require('../TCM/Login/Invalid_Credentials.js');
      require('../TCM/Login/Required_Fields.js');
    }

    static testSuccessfullyLogIn(){
      require('../TCM/Login/Success_Login.js');
    }

  }
  
  export default LoginPage;
