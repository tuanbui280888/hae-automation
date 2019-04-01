const page = require('../pages/page.js');

class Homepage {
    search(country, destination, date, airport, people) {
        if (country != null) {
            $(page.Homepage.COUNTRY_TEXTBOX_LOCATOR).click();
            const COUNTRY_OPTION_LOCATOR = '//div[@class="search-dropdown open"]/div[@class="search-level-1"]//a[contains(text(),"' + country + '")]';
            $(COUNTRY_OPTION_LOCATOR).click();
            if (destination != null) {
                const DESTINATION_OPTION_LOCATOR = '//div[@class="search-dropdown open"]/div[@class="search-level-2"]//a[contains(text(),"' + destination + '")]';
                $(DESTINATION_OPTION_LOCATOR).click();
            }
            $(page.Homepage.NEXT_BUTTON_LOCATOR).click();
        }
    };
}
module.exports = new Homepage();