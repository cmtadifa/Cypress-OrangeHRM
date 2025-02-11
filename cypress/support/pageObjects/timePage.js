const timeSelectors = {
    navBarBtn: '.oxd-topbar-body-nav-tab',
    navBarDropDown: '.oxd-topbar-body-nav-tab-link',
    configuration: {
        headerTitle: '.orangehrm-main-title',
        attendanceLabel: '.orangehrm-attendance-field-label',
        switches: '.oxd-switch-wrapper',
        switchCheckBox: 'input[type="checkbox"]'
    }
}

class timePage {

    static verifyToggleOn(){
        cy.get(timeSelectors.configuration.switches).eq(0).then((switch) => {
            const checkSwitch = switch.should('not.be.checked');
            if (checkSwitch) {
                switch.check();
            }
        });
        

    }



}