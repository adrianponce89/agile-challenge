import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { PictureProps } from '../../types';
import styles from './styles';

const keyExtractor = (item: PictureProps, page: number) =>
  item.id.toString() + page;

interface HomeViewProps {
  pictures: Array<PictureProps>;
  page: number;
  isLoading: boolean;
  onLoadNext: () => void;
  onRefresh: () => void;
  onOpenPicture: (imageId: number) => void;
}

const HomeView = ({
  pictures,
  page,
  isLoading,
  onLoadNext,
  onRefresh,
  onOpenPicture,
}: HomeViewProps) => {
  const _renderItem = (picture: { item: PictureProps }) => {
    const imageURL = picture.item.cropped_picture;
    const imageId = picture.item.id;
    return (
      <ListItem
        imageUrl={imageURL}
        imageId={imageId}
        openPicture={onOpenPicture}
      />
    );
  };

  return (
    <View style={styles.page}>
      <FlatList
        removeClippedSubviews
        refreshing={isLoading}
        initialNumToRender={20}
        data={pictures}
        onRefresh={onRefresh}
        numColumns={2}
        renderItem={_renderItem}
        keyExtractor={(item) => keyExtractor(item, page)}
        onEndReached={onLoadNext}
      />
    </View>
  );
};

export default HomeView;
