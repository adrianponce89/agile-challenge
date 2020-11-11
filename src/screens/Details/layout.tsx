import React from 'react';
import { View, Image } from 'react-native';
import { PictureProps } from '../../types';
import styles from './styles';
import DetailsFooter from './components/DetailsFooter';
import ImageZoom from 'react-native-image-pan-zoom';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/platform';

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
        <ImageZoom
          cropWidth={WINDOW_WIDTH}
          cropHeight={WINDOW_HEIGHT}
          imageWidth={WINDOW_WIDTH * 0.9}
          imageHeight={WINDOW_HEIGHT * 0.9}
        >
          <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
        </ImageZoom>
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
