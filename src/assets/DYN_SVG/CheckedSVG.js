import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function CheckedSVG(props) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={9.5} cy={9} r={9} fill="#8982FF" />
      <Path
        d="M5.5 8.83l2.83 2.83L14 6"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckedSVG;
