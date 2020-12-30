module.exports = {

    url: 'https://dev-dashboard.vutura.io/signIn',

    elements: {
        loginBtn: by.xpath("//span[contains(text(), 'Masuk')]")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};