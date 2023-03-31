import { createSlice } from "@reduxjs/toolkit";
import { unsplashApi } from '../api/unsplashApi';
import secrets from 'secrets';

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState: {
    loading: false,
    error: false,

    randomImages: [],
    images: [],

    searchCriteria: '',
    backImage: {},
    showBackImage: false,
    perPage: 20,
    currentPage: 1,
    totalRows: 0,
    mode: null,
    selectedCollection: 0,
    imageZoom: "",
    imageZoomAuthor: "",
  },
  reducers: {
    startLoading: state => {
      state.loading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    randomImagesSuccess: (state, action) => {
      state.randomImages = action.payload;
      state.loading = false;
    },
  },
});

export default unsplashSlice.reducer

const { randomImagesSuccess, startLoading, hasError } = unsplashSlice.actions;

export const fetchRandomImages = (perPage = 20) => async dispatch => {
  dispatch(startLoading());
  try {
    console.log('ajax');
    await unsplashApi
      .get(`/photos/random?query=wallpaper&count=${perPage}&orientation=landscape&client_id=${secrets.UNSPLASH_ACCESS_KEY}`)
      .then((response) => dispatch(randomImagesSuccess(response.data)))
  }
  catch (e) {
    dispatch(hasError(e.message))
  }
}
