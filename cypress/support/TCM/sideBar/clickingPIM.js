import sideBarPage from "../../pageObjects/sideBarPage";

describe('Clicking the PIM on the sidebar', () => {

  it('verify clicking PIM', function () {
    sideBarPage.verifySidebarBtn("PIM");
  });

});
