import { createSlice } from '@reduxjs/toolkit';
import picturesService from '../../services/picturesService';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    page: false,
    isLoading: false,
    pictures: [],
    errorMessage: null,
  },
  reducers: {
    getPicturesRequest: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    getPicturesSuccess: (state, action) => {
      state.isLoading = false;
      state.pictures = action.payload;
    },
    getPicturesFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getPicturesRequest,
  getPicturesSuccess,
  getPicturesFailure,
} = homeSlice.actions;

export function getPictures() {
  return (dispatch) => {
    dispatch(getPicturesRequest());
    picturesService.getPictures().then(
      (pictures) => {
        dispatch(getPicturesSuccess(pictures));
      },
      (error) => {
        dispatch(getPicturesFailure(error.toString()));
      }
    );
  };
}

export default homeSlice.reducer;
