const title = "All Inclusive Luxury Cruises - Get Cruising";
const SEARCH_BAR_LOCATOR = '//*[@id="search-form"]';
const SEARCH_BUTTON_LOCATOR = '//button[text()="Search"]';
const DESTINATION_COMBOBOX_LOCATOR = '//div[@id="destination-container"]';
const DEPARTURE_DATE_COMBOBOX_LOCATOR = '//div[@id="depart-date-container"]';
const DEPARTURE_DATE_TEXTBOX_LOCATOR = '//input[@id="depart_date"]';
const CRUISE_LINE_COMBOBOX_LOCATOR = '//div[@id="operator-container"]';

module.exports = {
    title,
    SEARCH_BUTTON_LOCATOR,
    SEARCH_BAR_LOCATOR,
    DESTINATION_COMBOBOX_LOCATOR,
    DEPARTURE_DATE_COMBOBOX_LOCATOR,
    CRUISE_LINE_COMBOBOX_LOCATOR,
    DEPARTURE_DATE_TEXTBOX_LOCATOR
}