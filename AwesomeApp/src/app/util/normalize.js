import { Dimensions, Platform, PixelRatio } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_HEIGHT / 750;

const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default normalize;