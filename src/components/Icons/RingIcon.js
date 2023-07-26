import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const SvgRingIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    {...props}>
    <Path
      fill="#29B029"
      d="M11.7 9.9a.9.9 0 0 0 0 1.8c1.586 0 3.254.91 4.091 2.107a.9.9 0 1 0 1.475-1.032C16.096 11.103 13.88 9.9 11.7 9.9Z"
    />
    <Path
      fill="#29B029"
      d="M9 6.3a3 3 0 1 1 6 0v1.056a9.894 9.894 0 0 1 6.9 9.445.9.9 0 0 1-.9.9H3a.9.9 0 0 1-.9-.9c0-4.415 2.907-8.152 6.9-9.43v-1.07Zm4.2 0a1.2 1.2 0 0 0-2.4 0v.676a9.997 9.997 0 0 1 2.4-.006V6.3Zm-9.25 9.6h16.102c-.446-4.05-3.86-7.2-8.026-7.2-4.17 0-7.625 3.154-8.076 7.2ZM2.4 18.9a2.4 2.4 0 1 0 0 4.8h19.2a2.4 2.4 0 1 0 0-4.8H2.4Zm-.6 2.4a.6.6 0 0 1 .6-.6h19.2a.6.6 0 0 1 0 1.2H2.4a.6.6 0 0 1-.6-.6Z"
    />
    <Circle cx={22} cy={3.602} r={3} fill="#D90909" />
  </Svg>
);
export default SvgRingIcon;
