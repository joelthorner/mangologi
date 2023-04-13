import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import chromeSyncReducer from '../slices/chromeSyncSlice';
import unsplashReducer from '../slices/unsplashSlice';
import commerceDataReducer from '../slices/commerceDataSlice';

const reducer = combineReducers({
  chromeSync: chromeSyncReducer,
  unsplash: unsplashReducer,
  commerceData: commerceDataReducer,
})

export default configureStore({
  reducer,
});
