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
        // Verify: Page loads complete
        assert.equal(browser.title().value, page.Homepage.title);
        // Verify: Check the search components loads on the screen
        assert.equal($(page.Homepage.SEARCH_BAR_LOCATOR).isVisible(), true);
    });
    describe('[HP-02] Verify user is able to search cruises', function () {
        destinations = common.json.convertToJSON(config.dataPath + 'destinations.csv');
        destinations.forEach(({ destination, cruise }) => {
            it(`Test with destination is ${destination} and cruse is ${cruise}`, function () {
                // Search for destination and cruise line, leave departure date as default
                object.Homepage.search(destination, null, cruise);
                // Verify: The result page loads successfully
                assert.equal(browser.title().value, page.SearchResultPage.title);
                // Verify: The result for detail details loads
                assert.equal($(page.SearchResultPage.DEAL_LIST_DIV_LOCATOR).isVisible(), true);
                // Navigate back to home page
                common.browser.navigate(config.url);
            })
        })
    })
});