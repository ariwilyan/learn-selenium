module.exports = {

    url: 'https://dev-dashboard.vutura.io/signIn',

    elements: {
        fieldPw: by.xpath("//input[@id='password-login']")
        // fieldEmail: by.xpath("//input[@id='email-login']") // coba sengaja dierror
        // fieldEmail: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/section[1]/section[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
        // return driver.findElement(selector).sendKeys('ariwilyan@gmail.com');
    }
};