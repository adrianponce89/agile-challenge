import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsProps } from '../../types';
import { RootState } from '../../redux/store';
import { getPictureDetails } from '../../redux/slices/detailsSlice';
import DetailsView from './layout';

const Details = ({ route }: DetailsProps) => {
  const dispatch = useDispatch();
  const { pictureDetails } = route.params;

  useEffect(() => {
    dispatch(getPictureDetails(pictureDetails!.id));
  }, []);

  const { picture } = useSelector((state: RootState) => state.details);

  const imageUrl = picture?.full_picture || pictureDetails!.cropped_picture;

  const handleApplyFilter = () => {};
  const handleShare = () => {};

  return (
    <DetailsView
      imageUrl={imageUrl}
      picture={picture}
      onShare={handleShare}
      onApplyFilter={handleApplyFilter}
    />
  );
};

export default Details;
