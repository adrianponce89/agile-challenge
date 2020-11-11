import { createSlice, Dispatch } from '@reduxjs/toolkit';
import picturesService from '../../services/picturesService';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    isLoading: false,
    hiResPictures: [],
    errorMessage: null,
  },
  reducers: {
    getPictureDetailsRequest: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    getPictureDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.hiResPictures = action.payload;
    },
    getPictureDetailsFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getPictureDetailsRequest,
  getPictureDetailsSuccess,
  getPictureDetailsFailure,
} = detailsSlice.actions;

export function getPictureDetails() {
  return (dispatch: Dispatch) => {
    dispatch(getPictureDetailsRequest());
    picturesService.getPictureDetails().then(
      (hiResPictures) => {
        dispatch(getPictureDetailsSuccess(hiResPictures));
      },
      (error) => {
        dispatch(getPictureDetailsFailure(error.toString()));
      }
    );
  };
}

export default detailsSlice.reducer;
