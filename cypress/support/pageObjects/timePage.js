const timeSelectors = {
    navBarBtn: '.oxd-topbar-body-nav-tab',
    navBarDropDown: '.oxd-topbar-body-nav-tab-link',
    successModal: '.oxd-toast--success',
    calendar:{
        calendar: '.oxd-date-input-calendar',
        calendarhdr: '.oxd-calendar-header',
        leftArw:'.oxd-icon.bi-chevron-left',
        rightArw:'.oxd-icon.bi-chevron-right',
        monthSelector: '.oxd-calendar-selector-month',
        yearSelector: '.oxd-calendar-selector-year',
        dayWrapper: '.oxd-calendar-date-wrapper',
        daySelector: '.oxd-calendar-date',
        todayDate: '.oxd-date-input-link.--today',
        clearDate: '.oxd-date-input-link.--clear',
        closeDate: '.oxd-date-input-link.--close'
    },
    configuration: {
        headerTitle: '.orangehrm-main-title',
        attendanceLabel: '.orangehrm-attendance-field-label',
        switches: '.oxd-switch-wrapper',
        switchCheckBox: 'input[type="checkbox"]'
    },
    PunchInOut: {
        headerTitle: '.orangehrm-main-title',
        dateTextField: '.oxd-date-input',
        timeBtn: '.oxd-icon.bi-clock',
        timePicker: '.oxd-time-picker',
        timeHrTextField: '.oxd-time-hour-input-text',
        timeMinTextField: '.oxd-time-minute-input-text',
        timeAM:'input[name="am"]',
        timePM:'input[name="pm"]',
        punchInBtn: 'button[type="submit"]',
        punchOutBtn: '.oxd-punch-out-button',
        noteTxt: '.oxd-textarea',
        punchTextWrapper: '.oxd-grid-item--gutters',
        punchText: '.oxd-text--subtitle-2'
    },
    myRecords: {
        recordsDateIcon: '.oxd-date-input-icon',
        recordBtn: '.oxd-button--secondary',
        recordTtlDuration: '.orangehrm-header-total',
        recordTable: '.orangehrm-my-attendance',
        recordActionBtn: '.oxd-table-cell-action-space',
        recordDeleteSelectedBtn: '.oxd-button--label-danger',
        recordTableCheckbox: '.oxd-checkbox-input--active',
        recordFoundTxt: '.orangehrm-vertical-padding',
        recordTableBody: '.oxd-table-body',
        recordTableCard: '.oxd-table-card',

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
            .find('.oxd-input--active')
            .should('be.visible');
    }
    
    static verifyTime() {
        cy.get(timeSelectors.PunchInOut.timeBtn).click()
            .should('be.visible');
        cy.get(timeSelectors.PunchInOut.timePicker)
            .should('be.visible')
        .within(() => {
                cy.get(timeSelectors.PunchInOut.timeHrTextField).clear().type('1')
                cy.get(timeSelectors.PunchInOut.timeMinTextField).clear().type('02')
                cy.get(timeSelectors.PunchInOut.timeAM).click();
        });
        cy.get(timeSelectors.PunchInOut.timeBtn).click()
    }

    static verifyNoteTxtArea() {
        cy.get(timeSelectors.PunchInOut.noteTxt)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Type here')
            .type('Test Note');
    }

    static verifyPunchIn() {
        cy.get(timeSelectors.PunchInOut.punchInBtn)
            .should('be.visible')
            .click();

        cy.get(timeSelectors.successModal)
            .should('to.be.visible')
    }

    static verifyPunchedInText() {
        cy.get(timeSelectors.PunchInOut.punchTextWrapper)
            .should('be.visible')
                cy.get(timeSelectors.PunchInOut.punchText)
                .contains(/AM|PM/);
    }

    static verifyPunchedInNote() {
        cy.get(timeSelectors.PunchInOut.punchTextWrapper)
            .should('be.visible')
                .find(timeSelectors.PunchInOut.punchText)
                .contains('Test Note');
    }

    static verifyPunchOut() {
        cy.get(timeSelectors.PunchInOut.punchOutBtn)
            .should('be.visible')
            .click();
    }

    static verifyClickingMyRecords() {
        cy.get(timeSelectors.navBarBtn).eq(1).click()
            .find(timeSelectors.navBarDropDown).eq(0).click();
    }

    static verifyDateofRecords() {
        cy.get(timeSelectors.myRecords.recordsDateIcon).click()

        cy.get(timeSelectors.calendar.calendar)
            .should('be.visible')
                .find(timeSelectors.calendar.todayDate).click();
    }

    static verifyViewBtn() {
        cy.get(timeSelectors.myRecords.recordBtn)
            .should('be.visible')
            .click();
    }

    static verifytotalHrs() {
        cy.get(timeSelectors.myRecords.recordTtlDuration)
            .should('be.visible')
            .contains('Total Duration (Hours):');
    }

    static verifyRecordText() {
        cy.get(timeSelectors.myRecords.recordFoundTxt)
            .should('be.visible')
            .contains(/Records? Found/);
    }

    static verifyRecords() {
        cy.get(timeSelectors.myRecords.recordTable)
            .should('be.visible');
    }

    //wrapper function
    static verifyAttendance() {
        require('../../support/TCM/Time/attendanceConfigure');
        require('../../support/TCM/Time/punchInOut');
        require('../../support/TCM/Time/myRecord');
    }

}

export default timePage;