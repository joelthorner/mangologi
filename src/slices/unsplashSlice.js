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
    imagesSuccess: (state, action) => {
      console.log(action.payload);
      state.images = action.payload;
      state.loading = false;
    },
    collectionSuccess: (state, action) => {
      state.images = action.payload.data;
      state.totalRows = action.payload.totalRows;
      state.loading = false;
    },
    setSelectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export default unsplashSlice.reducer

export const {
  randomImagesSuccess,
  imagesSuccess,
  collectionSuccess,
  startLoading,
  hasError,
  setSelectedCollection,
  setCurrentPage,
} = unsplashSlice.actions;

export const fetchRandomImages = (perPage = 20) => async dispatch => {
  dispatch(startLoading());
  try {
    console.log('fetchRandomImages');
    await unsplashApi
      .get(`/photos/random?query=wallpaper&count=${perPage}&orientation=landscape&client_id=${secrets.UNSPLASH_ACCESS_KEY}`)
      .then((response) => dispatch(randomImagesSuccess(response.data)))
  }
  catch (e) {
    dispatch(hasError(e.message))
  }
}

export const fetchCollection = (collectionId, currentPage, perPage = 20) => async dispatch => {
  dispatch(startLoading());
  try {
    console.log('fetchCollection');
    await unsplashApi
      .get(`/collections/${collectionId}/photos?id=${collectionId}&page=${currentPage}&per_page=${perPage}&client_id=${secrets.UNSPLASH_ACCESS_KEY}`)
      .then((response) => {
        return dispatch(collectionSuccess({
          data: response.data,
          totalRows: parseInt(response.headers["x-total"]),
        }))
      })
  }
  catch (e) {
    dispatch(hasError(e.message))
  }
}
