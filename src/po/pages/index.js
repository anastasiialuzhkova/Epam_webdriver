const BasePage = require('./base.page')
const LoginPage = require('./login.page')


function page(name) {
    const items = {
        login: new LoginPage() //base: new BasePage()
    }
    return items[name.toLowerCase()]
}

module.exports = {LoginPage, BasePage, page}