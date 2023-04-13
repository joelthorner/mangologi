import { createSlice } from '@reduxjs/toolkit';

export const commerceDataSlice = createSlice({
  name: 'commerceData',
  initialState: {
    commerceId: null,
    commerceType: null,
  },
  reducers: {
    setData: (state, action) => {
      // state.storage = action.payload;
      console.log(action.payload);
    },
  },
})

export const { setData } = commerceDataSlice.actions

export const requestCommerceData = () => async dispatch => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  chrome.tabs.sendMessage(tab.id, { directive: "getCommerceData" }, (response) => {
    dispatch(setData(response))
  });
}

export default commerceDataSlice.reducer
