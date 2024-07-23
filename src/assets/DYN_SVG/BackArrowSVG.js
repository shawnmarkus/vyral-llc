import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrowSVG({fill = '#fff', ...props}) {
  return (
    <Svg
      width={11}
      height={21}
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.06 19.976L1.737 12.43c-.983-.892-.983-2.35 0-3.241l8.323-7.546"
        stroke={fill}
        strokeWidth={1.83333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrowSVG;
