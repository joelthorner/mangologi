
async function getTabId() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  return tab.id;
}

// Popup actions listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (typeof request.directive !== 'undefined') {
    const files = request.directive.split(','),
      jsFiles = files.filter(file => file.includes('.js')),
      cssFiles = files.filter(file => file.includes('.css'));

    getTabId().then((tabId) => {
      if (jsFiles) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          files: jsFiles,
        })
        // .then(() => console.log("script injected"));
      }
      if (cssFiles) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: cssFiles,
        })
        // .then(() => console.log("script injected"));
      }
    });
  }
});