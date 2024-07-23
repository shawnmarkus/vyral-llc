import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseBtnSVG(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.408 8l6.3-6.29a1.004 1.004 0 10-1.42-1.42l-6.29 6.3-6.29-6.3a1.004 1.004 0 00-1.42 1.42L6.588 8l-6.3 6.29a1 1 0 000 1.42.998.998 0 001.42 0l6.29-6.3 6.29 6.3a.997.997 0 001.095.219.999.999 0 00.325-.22 1 1 0 000-1.42L9.408 8z"
        fill="#222"
      />
    </Svg>
  );
}

export default CloseBtnSVG;
