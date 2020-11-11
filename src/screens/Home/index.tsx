import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProps } from '../../types';
import { getPictures, clearPictures } from '../../redux/slices/homeSlice';
import { RootState } from '../../redux/store';
import HomeView from './layout';

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();

  const { pictures, page, isLoading } = useSelector(
    (state: RootState) => state.home
  );
  useEffect(() => {
    dispatch(getPictures(1));
  }, []);

  const onLoadNext = () => {
    dispatch(getPictures(page + 1));
  };
  const onRefresh = () => {
    dispatch(clearPictures());
    dispatch(getPictures(1));
  };

  const onOpenPicture = (imageId: number): void => {
    navigation.navigate('Details', {
      pictureDetails: pictures.find((pic) => pic.id === imageId),
    });
  };

  return (
    <HomeView
      pictures={pictures}
      page={page}
      isLoading={isLoading}
      onLoadNext={onLoadNext}
      onRefresh={onRefresh}
      onOpenPicture={onOpenPicture}
    />
  );
};

export default HomeContainer;
