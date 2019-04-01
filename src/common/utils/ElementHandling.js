class ElementHandling {
    /**
   * @param {string} locator    Element for wait
   */
    waitForElement(locator) {
        browser.waitForVisible(locator, 30000, false);
    }
}
module.exports = new ElementHandling();