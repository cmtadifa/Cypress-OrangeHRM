const timeSelectors = {
    navBarBtn: '.oxd-topbar-body-nav-tab',
    navBarDropDown: '.oxd-topbar-body-nav-tab-link',
    configuration: {
        headerTitle: '.orangehrm-main-title',
        attendanceLabel: '.orangehrm-attendance-field-label',
        switches: '.oxd-switch-wrapper',
        switchCheckBox: 'input[type="checkbox"]'
    },
    PunchInOut: {
        headerTitle: '.orangehrm-main-title',
        timeBtn: '.oxd-icon.bi-clock',
        timePicker: 'oxd-time-picker',
        timeHrTextField: '.oxd-time-hour-input-text',
        timeMinTextField: '.oxd-time-minute-input-text',
        timeAM:'input[name="am"]',
        timePM:'input[name="pm"]',
        punchInBtn: '.oxd-punch-in-button',
        punchOutBtn: '.oxd-punch-out-button'
    }
}

class timePage {

    static verifyClickingConfiguration() {
        cy.get(timeSelectors.navBarBtn).eq(1).click()
            .find(timeSelectors.navBarDropDown).eq(3).click();
    }

    static verifyClickingCPunchInOut() {
        cy.get(timeSelectors.navBarBtn).eq(1).click()
            .find(timeSelectors.navBarDropDown).eq(1).click();
    }

    static verifyTime() {
        cy.get(timeSelectors.PunchInOut.timeBtn).click({ force: true });
        cy.get(timeSelectors.PunchInOut.timePicker)
        .should('be.visible') // tobe refactored need to check the timePicker
            // .find(timeSelectors.PunchInOut.timeAM).click();
            // .find(timeSelectors.PunchInOut.timeMinTextField).type('30')
            // .find(timeSelectors.PunchInOut.timeAM).click();
    }


    // tobe refactored
    // static verifyToggleOn(){
    //     cy.get(timeSelectors.configuration.switchCheckBox).eq(1).then(($switch) => {
    //         if (!$switch.is(':checked')) {
    //             cy.wrap($switch).click({ force: true});
    //         }
    //     });
    // }

    //wrapper function
    static verifyAttendance() {
        require('../../support/TCM/Time/attendanceConfigure');
    }

}

export default timePage;