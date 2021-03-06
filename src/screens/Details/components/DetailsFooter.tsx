import * as React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from '../styles';
import { PictureProps } from '../../../types';
import imageFiltersImage from './images/ImageFilters.png';
import shareImage from './images/ShareThis.png';

type Props = {
  onShare: Function;
  onApplyFilter: Function;
  pictureDetails?: PictureProps;
};

class DetailsFooter extends React.PureComponent<Props> {
  render() {
    const { onShare, onApplyFilter, pictureDetails } = this.props;
    if (!pictureDetails) return null;
    const imageId = pictureDetails.id;
    return (
      <View style={styles.detailView}>
        <View style={styles.detailDescription}>
          <Text style={styles.detailAuthor}>{pictureDetails.author}</Text>
          <Text style={styles.detailCamera}>{pictureDetails.camera}</Text>
        </View>
        <View style={styles.detailButtons}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => onApplyFilter()}
          >
            <Image
              style={styles.detailViewImage}
              resizeMode="cover"
              source={imageFiltersImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => onShare(imageId)}
          >
            <Image
              style={styles.detailViewImage}
              resizeMode="cover"
              source={shareImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DetailsFooter;
