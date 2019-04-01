const page = require('../pages/page');
const common = require('../../../common/common');

class Homepage {
    search(destination, date, cruiseLine) {
        if (destination != null) {
           $(page.Homepage.DESTINATION_COMBOBOX_LOCATOR).click();
           let selectedDestination = '//*[@id="destination-list"]/a[contains(text(),"' + destination + '")]';
           $(selectedDestination).click();
           this._waitForDepartureDate();
        }
        if (cruiseLine != null) {
            $(page.Homepage.CRUISE_LINE_COMBOBOX_LOCATOR).click();
            let selectedCruiseLine = '//*[@id="operator-list"]/a[contains(text(),"' + cruiseLine + '")]';
            common.element.waitForElement(selectedCruiseLine);
            $(selectedCruiseLine).click();
            this._waitForDepartureDate();
        }
        $(page.Homepage.SEARCH_BUTTON_LOCATOR).click();
        common.browser.waitForPageReady();
    };

    _waitForDepartureDate()
    {
        browser.pause(1000);
        browser.waitUntil(() => {
            return $(page.Homepage.DEPARTURE_DATE_TEXTBOX_LOCATOR).getValue() != "";
        }, 5000, 'No Departure Date');
    }
}

module.exports = new Homepage();