const sideBarselectors = {
    sidebarWrapper: '.oxd-main-menu-item-wrapper',
    sideBarItem: '.oxd-main-menu-item'
   }
        
   class sideBarPage {
   
       static verifySidebarBtn(sideBar){
           let sideBarItem, urlRedirection;
           switch(sideBar){
               case 'Admin':
                   sideBarItem = 0;
                   urlRedirection = 'admin/viewSystemUsers';
                   break;
               case 'PIM':
                   sideBarItem = 1;
                   urlRedirection = 'pim/viewEmployeeList';
                   break;
               case 'Leave':
                   sideBarItem = 2;
                   urlRedirection = 'leave/viewLeaveList';
                   break;
               case 'Time':
                   sideBarItem = 3;
                   urlRedirection = 'time/viewEmployeeTimesheet';
                   break;
           }
           cy.get(sideBarselectors.sidebarWrapper).eq(sideBarItem)
           .click()
   
           cy.url().should('include', urlRedirection);
       }
   
       //wrapper function
       static clickPIMBtn(){
           require('../TCM/sideBar/clickingPIM.js');
       }

       static clickTimeBtn(){
           require('../TCM/sideBar/clickingTime.js');
       }
   }
      
   export default sideBarPage;
        