import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const SvgThreeDotIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 34 4"
    {...props}>
    <Circle cx={10.5} cy={2} r={1.25} fill="#29B029" />
    <Circle cx={17} cy={2} r={1.25} fill="#29B029" />
    <Circle cx={23.5} cy={2} r={1.25} fill="#29B029" />
  </Svg>
);
export default SvgThreeDotIcon;
