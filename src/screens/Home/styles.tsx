import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const styles: any = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'stretch',
    // backgroundColor: 'black',
  },
  errorContainer: {
    padding: 30,
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
  },
  item: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageStyle: {
    width: theme.IMAGE_PORTRAIT_SIZE,
    height: theme.IMAGE_PORTRAIT_SIZE,
  },
});

export default styles;
