const assert = require('chai').assert;
const config = require('../../config.json');
const common = require('../../../../common/common.js');
const page = require('../../pages/page.js');
const object = require('../../objects/object.js');

describe('Homepage Test', function () {
    before(() => {
        common.browser.navigate(config.url);
    });
    it('[HP-01] Verify the homepage is loaded when accessing', function () {
        // Verify: Check the search components loads on the screen
        assert.equal($(page.HomePage.SEARCH_BAR_LOCATOR).isVisible(), true);
    });
    describe('[HP-02] Verify user is able to search holidays for all countries', function () {
        destinations = common.json.convertToJSON('E:/hae-automation/src/web-app/GetSkiing/data/test/destinations.csv');
        // Verify: Check the search components loads on the screen
        destinations.forEach(({ country, destination }) => {
            it(`Test with country ${country} and destination is ${destination}`, function () {
                object.HomePage.search(country, destination);
            })
        })
    })
});