const verifyTitlebar = () => {
    cy.title()
        .should('contain', 'Swag Labs');
    }

const verifyLogo = () => {
    cy.get('.login_logo') // logo selector
        .should('be.visible')
        .then(($container) => {
            const textAlign = window.getComputedStyle($container[0]).textAlign;
            
            // Check if the text-align property 
            expect(textAlign).to.equal('center');

             // Get the computed style of the element
             const backgroundImage = window.getComputedStyle($container[0]).backgroundImage;
    
             // Extract the URL from the backgroundImage property
             const urlMatch = backgroundImage.match(/url\(["']?([^"']+)["']?\)/);
             const backgroundImageUrl = urlMatch ? urlMatch[1] : null;
     
             // Assert the background image URL
             expect(backgroundImageUrl).to.equal('https://www.saucedemo.com/v1/img/SwagLabs_logo.png'); // Replace with the expected URL

        });
    }


const verifyLoginForm = (Username,Password) => {
        
    it("should be able to input valid Username", () =>{
        cy.get('[data-test="username"]') // username form
            .should('be.visible') 
            .should('have.attr', 'placeholder', 'Username')
            .type(Username)
            .then(() => console.log('Typed Username:', Username)); // Log to verify
    });

    it("should be able to input valid Password", () =>{
        cy.get('[data-test="password"]') // username form
            .should('be.visible') 
            .should('have.attr', 'placeholder', 'Password')
            .type(Password)
            .then(() => console.log('Typed Password:', Password)); // Log to verify
    });

    it("should be successfully Login", () =>{
        cy.get('[data-test="login-button"]') // username form
            .should('be.visible') 
            .click();
    });
};

export function titlebar(Username,Password) {
    
    verifyLoginForm(Username,Password);
}