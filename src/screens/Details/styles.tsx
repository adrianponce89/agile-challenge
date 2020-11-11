import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';
const { width } = Dimensions.get('window');

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: width * 0.9,
    height: width * 0.9,
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  spinner: {
    position: 'absolute',
  },
  detailView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: theme.SECONDARY_COLOR,
  },
  detailViewImage: {
    width: 50,
    height: 50,
  },
  detailButtons: {
    position: 'absolute',
    bottom: 10,
    width: 120,
    right: 10,
    flexDirection: 'row',
  },
  detailDescription: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  detailAuthor: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailCamera: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
