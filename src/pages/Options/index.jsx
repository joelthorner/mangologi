import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';
import AppOptions from './AppOptions';
import { getChromeSyncDataAsync } from '../../utils/chromeSyncSlice';

import './index.scss';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// chrome.storage.sync.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });

store.dispatch(getChromeSyncDataAsync());

root.render(
  <Provider store={store}>
    <HashRouter>
      <AppOptions />
    </HashRouter>
  </Provider>
);
