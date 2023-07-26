import * as React from 'react';
import Svg, {Circle, Path, Mask} from 'react-native-svg';
const SvgMovieIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 42 42"
    {...props}>
    <Circle cx={21} cy={21} r={20} fill="#29B029" />
    <Path
      fill="#fff"
      d="M27 12v2h-2v-2h-8v2h-2v-2h-2v18h2v-2h2v2h8v-2h2v2h2V12h-2ZM17 26h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm10 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z"
    />
    <Mask
      id="MovieIcon_svg__a"
      width={42}
      height={42}
      x={0}
      y={0}
      fill="#000"
      maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h42v42H0z" />
      <Path d="M41 21c0 11.046-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1s20 8.954 20 20ZM3 21c0 9.941 8.059 18 18 18s18-8.059 18-18S30.941 3 21 3 3 11.059 3 21Z" />
    </Mask>
    <Path
      fill="#fff"
      fillOpacity={0.2}
      d="M41 21c0 11.046-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1s20 8.954 20 20ZM3 21c0 9.941 8.059 18 18 18s18-8.059 18-18S30.941 3 21 3 3 11.059 3 21Z"
    />
    <Path
      stroke="#29B029"
      d="M41 21c0 11.046-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1s20 8.954 20 20ZM3 21c0 9.941 8.059 18 18 18s18-8.059 18-18S30.941 3 21 3 3 11.059 3 21Z"
      mask="url(#MovieIcon_svg__a)"
    />
    <Mask
      id="MovieIcon_svg__b"
      width={7}
      height={13}
      x={35}
      y={20}
      fill="#000"
      maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M35 20h7v13h-7z" />
      <Path d="M40 21a.962.962 0 0 1 .975 1 20 20 0 0 1-3.227 9.932c-.302.463-.93.56-1.377.236-.447-.325-.543-.949-.244-1.413A18 18 0 0 0 38.972 22c.03-.552.476-1 1.028-1Z" />
    </Mask>
    <Path
      fill="#fff"
      d="M40 21a.962.962 0 0 1 .975 1 20 20 0 0 1-3.227 9.932c-.302.463-.93.56-1.377.236-.447-.325-.543-.949-.244-1.413A18 18 0 0 0 38.972 22c.03-.552.476-1 1.028-1Z"
    />
    <Path
      stroke="#29B029"
      d="M40 21a.962.962 0 0 1 .975 1 20 20 0 0 1-3.227 9.932c-.302.463-.93.56-1.377.236-.447-.325-.543-.949-.244-1.413A18 18 0 0 0 38.972 22c.03-.552.476-1 1.028-1Z"
      mask="url(#MovieIcon_svg__b)"
    />
  </Svg>
);
export default SvgMovieIcon;
