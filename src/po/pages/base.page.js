class BasePage {
  constructor(path) {
    this.path = path;
  }

  open() {
    return browser.url(this.path);
  }
}

module.exports = BasePage;
