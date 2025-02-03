const sideBarselectors = {
 sidebarWrapper: '.oxd-main-menu-item-wrapper',
 sideBarItem: '.oxd-main-menu-item'
}
     
class sideBarPage {

    static verifyClickingPIMbtn(){
        cy.get(sideBarselectors.sidebarWrapper).eq(1)
        .click()

    }

    static verifyPIMUrl(){
        cy.url().should('include', '/web/index.php/pim/');
    }

    static clickPIMBtn(){
        require('../TCM/sideBar/clickingPIM.js');
    }
}
   
export default sideBarPage;
     