module.exports = class HomePage {
    open (path) {
        return browser.url(path);
    }
}