import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UnBookedTicketSVG({innerFill = '#2F2E41', borderFill, props}) {
  return (
    <Svg
      width={23}
      height={27}
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.803 11.265a3.36 3.36 0 00-2.39-1.002V7.982c0-.605.237-1.185.66-1.613a2.24 2.24 0 011.593-.668h18.03c.598 0 1.171.24 1.594.668.423.428.66 1.008.66 1.613v2.28a3.36 3.36 0 00-2.39 1.003 3.442 3.442 0 00-.99 2.42c0 .906.356 1.777.99 2.418a3.36 3.36 0 002.39 1.002v2.281c0 .605-.237 1.185-.66 1.613a2.24 2.24 0 01-1.594.668H2.666a2.24 2.24 0 01-1.594-.668 2.295 2.295 0 01-.66-1.613v-2.28a3.36 3.36 0 002.39-1.003c.635-.641.99-1.512.99-2.419s-.355-1.777-.99-2.42zm10.575-4.753v-.57h-1.14V7.97a.57.57 0 101.14 0V6.51zm-.57 12.304a.57.57 0 01.57.572l-.002 1.459-.001.57-1.142-.002.001-.57.003-1.46a.57.57 0 01.572-.569zm.57-6.273a.57.57 0 10-1.141 0v2.281a.57.57 0 101.141 0v-2.281z"
        fill={innerFill}
      />
    </Svg>
  );
}

export default UnBookedTicketSVG;
