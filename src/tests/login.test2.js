const { page } = require("../po/pages");

describe("Login page - UC-2", () => {
  beforeEach(async () => {
    loginPage = await page("login");
    loginPage.open();
  });

  it("uc-2: login form with credentials by passing usernames", async () => {
    await loginPage.login("masha", "123");
    await loginPage.clearPassword();
    await loginPage.clickLoginButton();
    const errorText = await loginPage.errorUserName.getText();
    await expect(errorText).toContain("Password is required");
  });
});
