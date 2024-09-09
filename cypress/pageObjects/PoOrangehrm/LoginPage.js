class LoginPage {
    static verifyLoginForm(Username, Password) {
      cy.get('[name="username"]') // username form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Username')
        .type(Username);
  
      cy.get('[name="password"]') // password form
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Password')
        .type(Password);
  
      cy.get('[type="submit"]') // submit button
        .should('be.visible')
        .click();
    }
  }
  
  export default LoginPage;
