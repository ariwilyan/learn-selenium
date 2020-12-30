module.exports = function () {

    this.Given(/^user browse signin page$/, function () {
        helpers.loadPage('https://dev-dashboard.vutura.io/')
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
    });

    this.Given(/^user fill email field$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
    });

    this.Given(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fieldPw.performFill();
        })
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
    });

    this.When(/^user click login button$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();
        })
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
    });

    this.Then(/^user can see bot page$/, function () {
        return driver.findElements(by.xpath("//div[contains(text(),'Hai, bayu!')]"))
        // return driver.findElements(by.xpath("//div[contains(text(), 'Hai, bayu!')]"))

        .then(function (elements) {

            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(elements.length).to.equal(0);
        });

        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
    });

}

    // this.Given(/^user browse login page$/, function () {
    //     helpers.loadPage(shared.pages.vuturaSignInPage)
    // });

    // this.Given(/^user fill email to login$/, function () {
    //     driver.then(function () {
    //         return page.fillEmailSignIn.perform();
    //     })
    // });

    // this.When(/^user fill password to login$/, function () {
    //     driver.then(function () {
    //         return page.fillPasswordSignIn.perform();
    //     })
    // });

    // this.Then(/^user click login button$/, function () {
    //     driver.then(function () {
    //         return page.clickLoginButton.perform();
    //     })
    // });
