class LoginPage {
    static verifySuccessfulLogIn(Username, Password){
      cy.get('[name="username"]', { timeout: 10000 }) // username form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Username')
        .type(Username);
  
      cy.get('[name="password"]', { timeout: 10000 }) // password form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Password')
        .type(Password);
  
      cy.get('[type="submit"]', { timeout: 10000 }) // submit button
        .should('be.visible')
        .click();

      // Add assertions to verify successful login
      cy.url().should('include', '/dashboard'); // Example assertion
    }

    static verifyInvalidCredentials(Username,Password){
      cy.get('[name="username"]', { timeout: 10000 }) // username form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Username')
        .type(Username);
  
      cy.get('[name="password"]', { timeout: 10000 }) // password form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Password')
        .type(Password);
  
      cy.get('[type="submit"]', { timeout: 10000 }) // submit button
        .should('be.visible')
        .click();

      cy.get('[class="oxd-alert oxd-alert--error"]')
        .should('be.visible');
      
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
        .should('be.visible')
        .should('have.text','Invalid credentials');
        
    }

    static verifyRequiredfields(){
      cy.get('[name="username"]', { timeout: 10000 }) // username form
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')

      cy.get('[name="password"]', { timeout: 10000 }) // password form
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')

      cy.get('[type="submit"]', { timeout: 10000 }) // submit button
      .should('be.visible')
      .click();

      cy.get('[name="username"]', { timeout: 10000 }) // username form
      .should('be.visible')
      .should('have.css', 'border', '1px solid rgb(235, 9, 16)');

      cy.get('.oxd-input-group.oxd-input-field-bottom-space', { timeout: 10000 })
        .eq(0)
        .find('.oxd-input-group__message', { timeout: 10000 }) // username form
        .should('be.visible')
        .should('have.text', 'Required');

      cy.get('[name="password"]', { timeout: 10000 }) // username form
        .should('be.visible')
        .should('have.css', 'border', '1px solid rgb(235, 9, 16)');
  
      cy.get('.oxd-input-group.oxd-input-field-bottom-space', { timeout: 10000 })
        .eq(1)
        .find('.oxd-input-group__message', { timeout: 10000 }) // username form
        .should('be.visible')
        .should('have.text', 'Required');
  

      
    }


  }
  
  export default LoginPage;
