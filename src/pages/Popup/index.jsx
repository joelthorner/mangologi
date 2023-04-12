import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';
import './index.scss';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { getChromeSyncDataAsync } from '../../slices/chromeSyncSlice';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

store.dispatch(getChromeSyncDataAsync());

root.render(
  <Provider store={store}>
    <Popup />
  </Provider>
);
