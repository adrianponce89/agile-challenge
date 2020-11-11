import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

type Props = {
  imageUrl: string;
  imageId: number;
  openPicture: Function;
};

class ListItem extends React.PureComponent<Props> {
  render() {
    const { imageUrl, imageId, openPicture } = this.props;
    return (
      <TouchableOpacity
        onPress={() => openPicture(imageId)}
        style={styles.item}
      >
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
