import { createSlice } from "@reduxjs/toolkit";
import { unsplashApi } from '../api/unsplashApi';
import secrets from 'secrets';

const MODE_COLLECTION = "collection";
const MODE_SEARCH = "search";

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState: {
    loading: false,
    error: false,

    randomImages: [],
    images: [],

    searchCriteria: '',
    // isValidSearchCriteria: true,

    backImage: {},
    showBackImage: false,

    perPage: 20,
    currentPage: 1,
    totalRows: 0,

    mode: null,
    selectedCollection: 0,
  },
  reducers: {
    setBackImage: (state, action) => {
      state.backImage = action.payload;
    },

    setShowBackImage: (state, action) => {
      state.showBackImage = action.payload;
    },

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
      state.images = action.payload;
      state.loading = false;
    },

    collectionSuccess: (state, action) => {
      state.images = action.payload.data;
      state.totalRows = action.payload.totalRows;
      state.loading = false;
      state.mode = MODE_COLLECTION;
    },

    searchSuccess: (state, action) => {
      console.log(state);
      state.images = action.payload.data;
      state.totalRows = action.payload.totalRows;
      state.loading = false;
      state.mode = MODE_SEARCH;
    },

    setSelectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
      state.currentPage = 1;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setSearchCriteria: (state, action) => {
      state.currentPage = action.payload;
    },

    // setIsValidSearchCriteria: (state, action) => {
    //   if (action.payload.mode !== MODE_SEARCH) {
    //     state.isValidSearchCriteria = null;
    //   }
    //   state.isValidSearchCriteria = action.payload.searchCriteria.length > 0 && action.payload.images.length > 0;
    // },
  },
});

export default unsplashSlice.reducer

export const {
  randomImagesSuccess,
  imagesSuccess,
  collectionSuccess,
  searchSuccess,
  startLoading,
  hasError,
  setSearchCriteria,
  setSelectedCollection,
  setCurrentPage,
  setBackImage,
  setShowBackImage,
  // setIsValidSearchCriteria,
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

export const fetchSearch = (searchCriteria, currentPage, perPage = 20) => async dispatch => {
  dispatch(startLoading());
  try {
    console.log('fetchSearch');
    const _searchCriteria = encodeURI(searchCriteria.trim());
    dispatch(setSearchCriteria(_searchCriteria));

    if (_searchCriteria.length) {
      await unsplashApi
        .get(`/search/photos?query=${_searchCriteria}&page=${currentPage}&per_page=${perPage}&orientation=landscape&client_id=${secrets.UNSPLASH_ACCESS_KEY}`)
        .then((response) => {
          return dispatch(searchSuccess({
            data: response.data.results,
            totalRows: response.data.total,
          }))
        })
    }
  }
  catch (e) {
    dispatch(hasError(e.message))
  }
}
