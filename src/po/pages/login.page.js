import { Key } from "webdriverio";

const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
  }

  get userName() {
    return $("#user-name");
  }

  get password() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get errorUserName() {
    return $(`[data-test="error"]`);
  }

  async login(username, password) {
    await this.userName.setValue(username);
    await this.password.setValue(password);
  }

  async clearUserName() {
    await this.userName.setValue("aaa");
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys("Backspace");
  }

  async clearPassword() {
    await this.password.setValue("aaa");
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys("Backspace");
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
