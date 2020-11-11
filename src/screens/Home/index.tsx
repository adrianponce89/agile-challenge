import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProps } from '../../types';
import { getPictures } from '../../redux/slices/homeSlice';
import { RootState } from '../../redux/store';
import ListItem from './components/ListItem';
import styles from './styles';

interface Item {
  cropped_picture: string;
  id: number;
}

const keyExtractor = (item: Item, page: number) => item.id.toString() + page;

const Home = ({ navigation }: HomeProps) => {
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

  const _renderItem = (picture: { item: Item }) => {
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

export default Home;
