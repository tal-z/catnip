function nipify() {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.executeScript(tabs[0].id, {
      file: "catnip.js",
    });
  });
}

browser.browserAction.onClicked.addListener(nipify);
