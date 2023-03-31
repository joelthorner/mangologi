import { configureStore } from '@reduxjs/toolkit';
import chromeSyncReducer from '../slices/chromeSyncSlice';

export default configureStore({
  reducer: {
    chromeSync: chromeSyncReducer,
  },
});
