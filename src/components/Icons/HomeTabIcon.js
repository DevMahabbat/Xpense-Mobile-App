import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHomeTabIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#000"
      d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20ZM7 15v2h10v-2H7Z"
    />
  </Svg>
);
export default SvgHomeTabIcon;
