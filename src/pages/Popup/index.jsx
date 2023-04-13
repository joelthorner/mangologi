import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';
import './index.scss';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { getChromeSyncDataAsync } from '../../slices/chromeSyncSlice';
import { requestCommerceData } from '../../slices/commerceDataSlice';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

store.dispatch(getChromeSyncDataAsync());
store.dispatch(requestCommerceData());

root.render(
  <Provider store={store}>
    <Popup />
  </Provider>
);
