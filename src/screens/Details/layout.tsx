import React from 'react';
import { View, Image } from 'react-native';
import { PictureProps } from '../../types';
import styles from './styles';
import DetailsFooter from './components/DetailsFooter';

interface DetailsViewProps {
  imageUrl: string;
  picture?: PictureProps;
  onShare: () => void;
  onApplyFilter: () => void;
}

const DetailsView = ({
  imageUrl,
  picture,
  onShare,
  onApplyFilter,
}: DetailsViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      </View>
      <DetailsFooter
        pictureDetails={picture}
        onShare={onShare}
        onApplyFilter={onApplyFilter}
      />
    </View>
  );
};

export default DetailsView;
