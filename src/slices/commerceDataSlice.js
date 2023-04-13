import { createSlice } from '@reduxjs/toolkit';

export const commerceDataSlice = createSlice({
  name: 'commerceData',
  initialState: {
    commerceId: null,
    type: null,
    environment: null,
    template: null,
    fluidCache: null,
  },
  reducers: {
    setData: (state, action) => {
      const { commerceId, type, environment, template, fluidCache } = action.payload.commerceData;
      state.commerceId = commerceId;
      state.type = type;
      state.environment = environment;
      state.template = template;
      state.fluidCache = fluidCache;
    },
  },
})

export const { setData } = commerceDataSlice.actions

export const requestCommerceData = () => async dispatch => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, { directive: "getCommerceData" }, (response) => {
    dispatch(setData(response))
  });
}

export default commerceDataSlice.reducer
