import fluidAutoSignupInit from '../Content/actions/fluidAutoSignup/index';
import GETRefreshImg from '../Content/actions/GETRefreshImg/index';

// Popup actions listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (typeof request.directive === 'undefined') return false;

  const profileDataResult = chrome.storage.sync.get(['profile']);
  const getTabId = chrome.tabs.query({ active: true, lastFocusedWindow: true });

  if (request.directive.includes(',')) {
    const files = request.directive.split(','),
      jsFiles = files.filter(file => file.includes('.js')),
      cssFiles = files.filter(file => file.includes('.css'));

    Promise.all([getTabId, profileDataResult]).then(([tabs]) => {
      const [tab] = tabs;

      if (jsFiles)
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          world: 'MAIN',
          files: jsFiles,
        })

      if (cssFiles)
        chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          files: cssFiles,
        })
    });

  } else if (request.directive === 'fluidAutoSignupInit') {
    Promise.all([getTabId, profileDataResult]).then(([tabs, profileData]) => {
      const [tab] = tabs;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: fluidAutoSignupInit,
        args: [profileData],
        world: 'MAIN',
      });
    });
  } else if (request.directive === 'GETRefreshImg') {
    Promise.all([getTabId]).then(([tabs, profileData]) => {
      const [tab] = tabs;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: GETRefreshImg,
        world: 'MAIN',
      });
    });
  }
});