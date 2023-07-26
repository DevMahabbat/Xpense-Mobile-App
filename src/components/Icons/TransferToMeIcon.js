import * as React from 'react';
import Svg, {Circle, Path, Mask} from 'react-native-svg';
const SvgTransferToMeIcon = props => (
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
      d="M16.38 18.143c.282.003.52.108.712.316.193.209.287.454.284.737l-.04 3.995 7.963-7.805a.968.968 0 0 1 .71-.294c.271.003.506.105.704.308a.97.97 0 0 1 .294.71.97.97 0 0 1-.308.704l-7.962 7.805 4.03.04c.283.003.52.103.713.3a.973.973 0 0 1 .285.718.974.974 0 0 1-.3.713.973.973 0 0 1-.718.284l-6.47-.064a.883.883 0 0 1-.38-.083 1.115 1.115 0 0 1-.306-.224 1.113 1.113 0 0 1-.218-.311.883.883 0 0 1-.076-.382l.065-6.505a.932.932 0 0 1 .298-.677.974.974 0 0 1 .72-.285Z"
    />
    <Mask
      id="TransferToMeIcon_svg__a"
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
      mask="url(#TransferToMeIcon_svg__a)"
    />
    <Mask
      id="TransferToMeIcon_svg__b"
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
      mask="url(#TransferToMeIcon_svg__b)"
    />
  </Svg>
);
export default SvgTransferToMeIcon;
