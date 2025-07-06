const { page } = require("../po/pages");

describe("Login page - UC-1", () => {
  beforeEach(async () => {
    loginPage = await page("login");
    loginPage.open();
  });

  it("uc-1: login form with empty credentials", async () => {
    await loginPage.login("masha", "123");
    await loginPage.clearUserName();
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();

    const errorText = await loginPage.errorUserName.getText();
    await expect(errorText).toContain("Username is required");
  });
});
