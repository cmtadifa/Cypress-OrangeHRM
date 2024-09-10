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
      

  }
  
  export default LoginPage;
