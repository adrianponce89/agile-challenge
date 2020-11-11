import { createSlice, Dispatch } from '@reduxjs/toolkit';
import picturesService from '../../services/picturesService';
import { PictureProps } from '../../types';

type DetailsState = {
  isLoading: boolean;
  picture?: PictureProps;
  errorMessage?: string;
};

const initialState: DetailsState = {
  isLoading: false,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getPictureDetailsRequest: (state) => {
      state.isLoading = true;
    },
    getPictureDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.picture = action.payload;
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

export function getPictureDetails(id: number) {
  return (dispatch: Dispatch) => {
    dispatch(getPictureDetailsRequest());
    picturesService.getPictureDetails(id).then(
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
