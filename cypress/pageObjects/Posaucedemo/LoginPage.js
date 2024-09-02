const verifyTitlebar = () => {
    cy.title().should('contain', 'Swag Labs');
}


export function titlebar() {
    verifyTitlebar();
}