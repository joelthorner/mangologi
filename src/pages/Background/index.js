import fluidAutoSignupInit from '../Content/actions/fluidAutoSignup/index';

// TODO
// const profileDataResult = () => {
//   chrome.storage.sync.get(['profile'], (result) => {
//   });
// }

async function getTabId() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  return tab.id;
}

// Popup actions listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.directive);
  if (typeof request.directive !== 'undefined' && request.directive.includes(',')) {
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
    console.log('a');
  } else if (typeof request.directive === 'string') {
    // fluidAutoSignupInit
    // TODO
    // chrome.scripting
    //   .executeScript({
    //     target: { tabId: getTabId() },
    //     func: fluidAutoSignupInit(profileDataResult()),
    //   })
    //   .then(() => console.log("injected a function"));
  }
});