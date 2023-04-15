import { createSlice } from '@reduxjs/toolkit';

export const commerceDataSlice = createSlice({
  name: 'commerceData',
  initialState: {
    commerceId: null,
    type: null,
    environment: null,
    template: {
      version: null,
      type: null,
    },
    fluidCache: null,
    tabUrl: '',
    tabId: null,
  },
  reducers: {
    setData: (state, action) => {
      if (action.payload?.commerceData) {
        const { commerceId, type, environment, template, fluidCache } = action.payload.commerceData;
        state.commerceId = commerceId;
        state.type = type;
        state.environment = environment;
        state.template.version = template.version;
        state.template.type = template.type;
        state.fluidCache = fluidCache;
      }
    },

    setTab: (state, action) => {
      const { tabUrl, tabId } = action.payload;
      state.tabUrl = tabUrl;
      state.tabId = tabId;
    },
  },
})

export const { setData, setTab } = commerceDataSlice.actions

export const requestCommerceData = () => async dispatch => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    chrome.tabs.sendMessage(tab.id, {
      directive: "getCommerceData"
    }, (response) => {
      dispatch(setData(response));
      dispatch(setTab({
        tabUrl: tab.url,
        tabId: tab.id,
      }));
    });
  } catch (error) {
    console.log(error);
  }
}

export default commerceDataSlice.reducer
