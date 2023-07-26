import * as React from 'react';
import Svg, {Circle, Mask, Path, G} from 'react-native-svg';
const SvgDinnerIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 42 42"
    {...props}>
    <Circle cx={21} cy={21} r={20} fill="#29B029" />
    <Mask
      id="DinnerIcon_svg__a"
      width={20}
      height={24}
      x={11}
      y={9}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 11v20m-3-19.5v5c0 2.5 3 2.5 3 2.5s3 0 3-2.5v-5m7 7.5v12"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29 15c0 2.209-1.343 4-3 4s-3-1.791-3-4 1.343-4 3-4 3 1.791 3 4Z"
      />
    </Mask>
    <G mask="url(#DinnerIcon_svg__a)">
      <Path fill="#fff" d="M9 9h24v24H9V9Z" />
    </G>
    <Mask
      id="DinnerIcon_svg__b"
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
      mask="url(#DinnerIcon_svg__b)"
    />
    <Mask
      id="DinnerIcon_svg__c"
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
      mask="url(#DinnerIcon_svg__c)"
    />
  </Svg>
);
export default SvgDinnerIcon;
