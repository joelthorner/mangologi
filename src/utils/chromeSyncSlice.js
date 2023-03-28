import { createSlice } from '@reduxjs/toolkit';
import initialChromeSyncData from "../data/initialChromeSyncData.json";
import extraChromeSyncData from "../data/extraChromeSyncData.json";
import _ from "lodash";


export const chromeSyncSlice = createSlice({
  name: 'chromeSync',
  initialState: initialChromeSyncData,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },

    modifyProp: (state, action) => {
      const [key, prop, newValue] = action.payload;
      state[key].props[prop] = newValue;
      console.log(state[key].props, action);
      chrome.storage.sync.set(state).then(() => {
        console.log("Value is set to ");
      });
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setChromeSyncAsync: (state, action) => {
      state = action.payload;
    },
  },
})

// export const { increment, decrement, incrementByAmount } = chromeSyncSlice.actions
export const { setChromeSyncAsync, modifyProp } = chromeSyncSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getChromeSyncDataAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getChromeSyncDataAsync = () => (dispatch) => {
  console.log('getChromeSyncDataAsync');
  chrome.storage.sync.get(initialChromeSyncData).then((result) => {
    dispatch(setChromeSyncAsync(result));
  });
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.chromeSync.value)`
export const getChromeSync = (state) => _.merge(state.chromeSync, extraChromeSyncData);


export default chromeSyncSlice.reducer
