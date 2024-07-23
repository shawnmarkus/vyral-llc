import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CalenderSVG(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.625 4.165V2.082v2.083zm0 0V6.25 4.165zm0 0h-4.688 4.688zm-12.5 6.25v9.375c0 1.151.933 2.084 2.083 2.084h14.584c1.15 0 2.083-.933 2.083-2.084v-9.375H3.125z"
        fill="#2F2E41"
      />
      <Path
        d="M15.625 4.165V2.082m0 2.083V6.25m0-2.084h-4.688m-7.812 6.25v9.375c0 1.151.933 2.084 2.083 2.084h14.584c1.15 0 2.083-.933 2.083-2.084v-9.375H3.125z"
        stroke="#2F2E41"
        strokeWidth={1.8125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.125 10.418V6.251c0-1.15.933-2.083 2.083-2.083h2.084M7.292 2.082v4.167M21.875 10.418V6.251c0-1.15-.933-2.083-2.084-2.083h-.52"
        stroke="#2F2E41"
        strokeWidth={1.8125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalenderSVG;
