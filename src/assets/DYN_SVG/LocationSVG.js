import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationSVG(props) {
  return (
    <Svg
      width={22}
      height={25}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.341 8.17C20.061 2.538 15.146 0 10.83 0h-.012C6.512 0 1.585 2.524.305 8.159-1.122 14.45 2.732 19.78 6.219 23.134A6.629 6.629 0 0010.83 25a6.579 6.579 0 004.598-1.866c3.488-3.354 7.341-8.67 5.915-14.963zM10.83 14.28a3.841 3.841 0 110-7.682 3.841 3.841 0 010 7.683z"
        fill="#2F2E41"
      />
    </Svg>
  );
}

export default LocationSVG;
