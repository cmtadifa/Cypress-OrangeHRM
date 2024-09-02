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


const verifyLoginForm = () => {
        cy.get('[class="username"]') // username form
            .should('be.visible') 
            .should('have.attr', 'placeholder', 'Username')

    }

export function titlebar() {
    
    verifyLoginForm();
}