import * as React from 'react';
import Svg, {Circle, Path, Mask} from 'react-native-svg';
const SvgRentIcon = props => (
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
      d="M14.5 29.773c-.55 0-1.021-.195-1.413-.587a1.928 1.928 0 0 1-.587-1.413v-10c0-.55.196-1.02.587-1.413a1.928 1.928 0 0 1 1.413-.587h2v-2c0-.55.196-1.02.588-1.413a1.925 1.925 0 0 1 1.412-.587h6c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6h2c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6c0 .55-.196 1.021-.587 1.413a1.928 1.928 0 0 1-1.413.587h-6v-4h-2v4h-6Zm0-2h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm4 4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm4 8h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm4 12h2v-2h-2v2Zm0-4h2v-2h-2v2Z"
    />
    <Mask
      id="RentIcon_svg__a"
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
      mask="url(#RentIcon_svg__a)"
    />
    <Mask
      id="RentIcon_svg__b"
      width={28}
      height={22}
      x={14}
      y={20}
      fill="#000"
      maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M14 20h28v22H14z" />
      <Path d="M40 21c.552 0 1.003.448.975 1a20 20 0 0 1-25.197 18.306c-.533-.144-.82-.71-.65-1.236.171-.525.735-.81 1.269-.669A18 18 0 0 0 38.972 22c.03-.55.476-.999 1.028-.999Z" />
    </Mask>
    <Path
      fill="#fff"
      d="M40 21c.552 0 1.003.448.975 1a20 20 0 0 1-25.197 18.306c-.533-.144-.82-.71-.65-1.236.171-.525.735-.81 1.269-.669A18 18 0 0 0 38.972 22c.03-.55.476-.999 1.028-.999Z"
    />
    <Path
      stroke="#29B029"
      d="M40 21c.552 0 1.003.448.975 1a20 20 0 0 1-25.197 18.306c-.533-.144-.82-.71-.65-1.236.171-.525.735-.81 1.269-.669A18 18 0 0 0 38.972 22c.03-.55.476-.999 1.028-.999Z"
      mask="url(#RentIcon_svg__b)"
    />
  </Svg>
);
export default SvgRentIcon;
