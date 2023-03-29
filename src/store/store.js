import { configureStore } from '@reduxjs/toolkit';
import chromeSyncReducer from '../utils/chromeSyncSlice';

export default configureStore({
  reducer: {
    chromeSync: chromeSyncReducer,
  },
});
