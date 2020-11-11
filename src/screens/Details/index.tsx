import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsProps } from '../../types';
import styles from './styles';
import DetailsFooter from './components/DetailsFooter';
import { RootState } from '../../redux/store';
import { getPictureDetails } from '../../redux/slices/detailsSlice';

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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      </View>
      <DetailsFooter
        pictureDetails={picture}
        onShare={handleShare}
        onApplyFilter={handleApplyFilter}
      />
    </View>
  );
};

export default Details;
