import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowBackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#29B029"
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
    />
  </Svg>
);
export default SvgArrowBackIcon;
