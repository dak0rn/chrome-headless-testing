const { crawler } = require('../../package.json');

exports['Image src'] = function(browser) {
    browser.url(`${crawler.target}`).waitForElementVisible('body', 1000);
    const image = '#me';

    browser.expect.element(image).to.be.present;
    browser.expect.element(image).to.have.attribute('src', 'heythatsme.jpg');
    browser.end();
};
