import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import homeReducer from './slices/homeSlice';
import detailsReducer from './slices/detailsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
