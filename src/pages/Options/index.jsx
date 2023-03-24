import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppOptions from './AppOptions';

import './index.scss';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// chrome.storage.sync.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });

root.render(
  <HashRouter>
    <AppOptions />
  </HashRouter>
);
