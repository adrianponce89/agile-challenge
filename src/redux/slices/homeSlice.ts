import { createSlice, Dispatch } from '@reduxjs/toolkit';
import picturesService from '../../services/picturesService';
import { PictureProps } from '../../types';

type HomeState = {
  page: number;
  isLoading: boolean;
  pictures: Array<PictureProps>;
  errorMessage?: string;
};

const initialState: HomeState = {
  page: 0,
  isLoading: false,
  pictures: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearPictures: (state) => {
      state.page = 0;
      state.isLoading = false;
      state.pictures = [];
    },
    getPicturesRequest: (state) => {
      state.isLoading = true;
    },
    getPicturesSuccess: (state, action) => {
      state.isLoading = false;
      const { pictures, page } = action.payload;
      if (page > state.page) {
        state.page = page;
        state.pictures = state.pictures.concat(pictures);
        console.log('number of pictures::', pictures.length);
      }
    },
    getPicturesFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  clearPictures,
  getPicturesRequest,
  getPicturesSuccess,
  getPicturesFailure,
} = homeSlice.actions;

export function getPictures(page: number) {
  return (dispatch: Dispatch) => {
    dispatch(getPicturesRequest());
    picturesService.getPictures(page).then(
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
