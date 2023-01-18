browser.runtime.onInstalled.addListener(async ({ reason }) => {
  switch (reason) {
    case "install":
      {
        const url = browser.runtime.getURL("views/installed.html");
        await browser.tabs.create({ url });
        // or: await browser.windows.create({ url, type: "popup", height: 600, width: 600, });
      }
      break;
    // see below
  }
});

function nipify() {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.executeScript(tabs[0].id, {
      file: "catnip.js",
    });
  });
}

browser.browserAction.onClicked.addListener(nipify);
