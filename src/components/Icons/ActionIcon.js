import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgActionIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    fill="none"
    viewBox="0 0 95 110"
    {...props}>
    <G filter="url(#ActionIcon_svg__a)">
      <Circle cx={45} cy={45} r={35} fill="#29B029" />
    </G>
    <Path
      fill="#fff"
      d="M43.294 53.96v-8h-8v-2.667h8v-8h2.667v8h8v2.667h-8v8h-2.667Z"
    />
    <Defs></Defs>
  </Svg>
);
export default SvgActionIcon;
