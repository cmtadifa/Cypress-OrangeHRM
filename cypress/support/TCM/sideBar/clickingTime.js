import sideBarPage from "../../pageObjects/sideBarPage";

describe('Clicking the PIM on the sidebar', () => {

  it('verify clicking Time', function () {
    sideBarPage.verifySidebarBtn("Time");
  });

});
