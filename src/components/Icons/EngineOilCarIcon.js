import * as React from 'react';
import Svg, {Circle, Path, Mask} from 'react-native-svg';
const SvgEngineOilCarIcon = props => (
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
      d="M27.92 15.01c-.2-.59-.76-1.01-1.42-1.01h-11c-.66 0-1.21.42-1.42 1.01L12 21v7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V28h12v.5c0 .82.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5V21l-2.08-5.99ZM16.5 25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm-10.69-6 1.04-3h10.29l1.04 3H14.81Z"
    />
    <Mask
      id="EngineOilCarIcon_svg__a"
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
      mask="url(#EngineOilCarIcon_svg__a)"
    />
    <Mask
      id="EngineOilCarIcon_svg__b"
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
      mask="url(#EngineOilCarIcon_svg__b)"
    />
  </Svg>
);
export default SvgEngineOilCarIcon;
