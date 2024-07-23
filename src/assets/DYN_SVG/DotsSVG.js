import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function DotsSVG({fill = '#fff', ...props}) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={2.30769} cy={9.95027} r={2.30769} fill={fill} />
      <Circle cx={9.99995} cy={9.95027} r={2.30769} fill={fill} />
      <Circle cx={17.6923} cy={9.95027} r={2.30769} fill={fill} />
    </Svg>
  );
}

export default DotsSVG;
