
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
    let files = request.directive.split(',');
    getTabId().then((tabId) => {
      console.log(tabId);
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        world: 'MAIN',
        files: files,
      })
        .then(() => console.log("script injected"));
    });
  }
});