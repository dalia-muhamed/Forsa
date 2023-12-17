import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const calcHeightProfile = target => {
  let parent = 812;
  const val = target / parent;
  const result = val * height;
  return result;
};
export const calcWidth = target => {
  let parent = 375;
  const val = target / parent;
  const result = val * width;
  return result;
};
export const calcHeightHome = target => {
  let parent = 1147;
  const val = target / parent;
  const result = val * height;
  return result;
};
