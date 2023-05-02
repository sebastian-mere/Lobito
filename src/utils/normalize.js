import { Dimensions, PixelRatio } from 'react-native';

const normalize = (size) => {
  const { width, height } = Dimensions.get('window');
  const scaleFactor = Math.min(width / 411.42857142857144, height / 804.5714285714286);
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export {
  normalize
};
