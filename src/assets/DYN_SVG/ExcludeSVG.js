import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ExcludeSVG(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 20.917c5.753 0 10.416-4.663 10.416-10.416S16.253.084 10.5.084.083 4.748.083 10.501 4.747 20.917 10.5 20.917zm0-17.448c.431 0 .781.35.781.781v1.303h3.385a.781.781 0 110 1.562h-3.385V9.72h1.302a2.865 2.865 0 010 5.73h-1.302v1.301a.781.781 0 01-1.562 0v-1.302H6.333a.781.781 0 110-1.562h3.386v-2.604H8.416a2.865 2.865 0 110-5.73H9.72V4.25c0-.431.35-.781.781-.781zM8.416 7.115H9.72V9.72H8.416a1.302 1.302 0 110-2.604zm2.865 6.771v-2.604h1.302a1.302 1.302 0 010 2.604h-1.302z"
        fill="#2F2E41"
      />
    </Svg>
  );
}

export default ExcludeSVG;
