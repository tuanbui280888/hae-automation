class BrowserHandling {
    /**
   * @param {string} url    urrl for navigate
   */
    navigate(url) {
        browser.url(url);
        browser.windowHandleMaximize();
        this.waitForPageReady();
    }

    /**
   * @returns {string}
   * @private
   */
    _getDocumentState() {
        const readyState = browser.execute(() => {
            return document.readyState;
        });

        return readyState;
    }

    /**
   * @param {int=} timeout    timeout in ms (default: 30000)
   * @param {int=} interval   interval between condition checks (default: 500)
   * @returns {BrowserHandling}
   */
    waitForPageReady(timeout = 5000, interval = 500) {
        browser.waitUntil(
            () => {
                return (
                    this._getDocumentState().value === 'complete'
                );
            },
            timeout,
            'Page load timeout!',
            interval
        );
    }
}
module.exports = new BrowserHandling();