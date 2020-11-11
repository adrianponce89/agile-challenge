import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProps } from '../../types';
import { getPictures } from '../../redux/slices/homeSlice';
import { RootState } from '../../redux/store';
import HomeView from './layout';

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const { pictures, page, isLoading } = useSelector(
    (state: RootState) => state.home
  );

  const onLoadNext = () => {};
  const onRefresh = () => {};

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
