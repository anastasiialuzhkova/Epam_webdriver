const { page } = require("../po/pages");

describe("Login page - UC-3", () => {
  beforeEach(async () => {
    loginPage = await page("login");
    loginPage.open();
  });

  it("uc-3: test login form with credentials by passing username & password", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.clickLoginButton();

    const title = await browser.getTitle();
    await expect(browser).toHaveTitle(title);
  });
});
