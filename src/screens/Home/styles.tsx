import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
  body: {
    backgroundColor: theme.BACKGROUND_COLOR,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: theme.FONT_LINE_LARGE,
    textAlign: 'center',
  },
});

export default styles;
