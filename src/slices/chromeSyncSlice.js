import { createSlice } from '@reduxjs/toolkit';
import initialChromeSyncData from "../data/initialChromeSyncData.json";

export const chromeSyncSlice = createSlice({
  name: 'chromeSync',
  initialState: {
    storage: initialChromeSyncData
  },
  reducers: {
    /**
     * Updateja una prop de una key de chrome storage
     * @param {*} state 
     * @param {*} action 
     */
    modifyProp: (state, action) => {
      const [key, prop, newValue] = action.payload;
      state.storage[key].props[prop] = newValue;

      const newKeyData = JSON.parse(JSON.stringify(state.storage));
      chrome.storage.sync.set(newKeyData);
    },

    /**
     * Updateja varies prop de una key de chrome storage
     * @param {*} state 
     * @param {*} action 
     */
    modifyProps: (state, action) => {
      const props = action.payload;
      props.forEach(propArr => {
        const [key, prop, newValue] = propArr;
        state.storage[key].props[prop] = newValue;
      });
      const newKeyData = JSON.parse(JSON.stringify(state.storage));
      chrome.storage.sync.set(newKeyData);
    },

    /**
     * Usat on init dins de getChromeSyncDataAsync nomes
     * @param {*} state 
     * @param {*} action 
     */
    setChromeSyncAsync: (state, action) => {
      state.storage = action.payload;
    },

    modifyAvatar: (state, action) => {
      const { img, description, name } = action.payload;
      state.storage.profile.avatar.value = img;
      state.storage.profile.avatar.description = description;
      state.storage.profile.avatar.name = name;
      const newKeyData = JSON.parse(JSON.stringify(state.storage));
      chrome.storage.sync.set(newKeyData);
    },
  },
})

export const { setChromeSyncAsync, modifyProp, modifyProps, modifyAvatar } = chromeSyncSlice.actions

export const getChromeSyncDataAsync = () => (dispatch) => {
  chrome.storage.sync.get(initialChromeSyncData).then((result) => {
    dispatch(setChromeSyncAsync(result));
  });
}

export default chromeSyncSlice.reducer
