import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';
import AppOptions from './AppOptions';
import { getChromeSyncDataAsync } from '../../slices/chromeSyncSlice';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

import './index.scss';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

TimeAgo.addDefaultLocale(en);

store.dispatch(getChromeSyncDataAsync());

root.render(
  <Provider store={store}>
    <HashRouter>
      <AppOptions />
    </HashRouter>
  </Provider>
);
