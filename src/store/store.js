import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import chromeSyncReducer from '../slices/chromeSyncSlice';
import unsplashReducer from '../slices/unsplashSlice';

const reducer = combineReducers({
  chromeSync: chromeSyncReducer,
  unsplash: unsplashReducer,
})

export default configureStore({
  reducer,
});
