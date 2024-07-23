import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShareSVG(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 12.5V18a2 2 0 002 2h12a2 2 0 002-2v-5.5M17 9l-4-4-4 4M13 5v9.664"
        stroke="#6C63FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ShareSVG;
