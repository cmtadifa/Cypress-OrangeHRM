import { expect } from 'chai';

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
        dateTextField: '.oxd-input--active',
        timeBtn: '.oxd-icon.bi-clock',
        timePicker: '.oxd-time-picker',
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

    static verifyDate() {
        cy.get(timeSelectors.PunchInOut.dateTextField)
            .invoker('val')
            .then((value) => {
                const today = dayjs().format('YYYY-MM-DD');
                expect(value).to.equal(today);
            })
    }
    
    static verifyTime() {
        cy.get(timeSelectors.PunchInOut.timeBtn).click()
            .should('be.visible');
        cy.get(timeSelectors.PunchInOut.timePicker)
            .should('be.visible')
        .within(() => {
                cy.get(timeSelectors.PunchInOut.timeHrTextField).clear().type('12')
                cy.get(timeSelectors.PunchInOut.timeMinTextField).clear().type('30')
                cy.get(timeSelectors.PunchInOut.timeAM).click();
        });
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