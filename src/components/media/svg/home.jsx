import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.143 10.17L11.737.195a.7.7 0 00-.973 0L.347 10.18a1.174 1.174 0 00.825 2.006h1.641v8.438A1.875 1.875 0 004.688 22.5h13.125a1.875 1.875 0 001.875-1.875v-8.439h1.641a1.174 1.174 0 001.171-1.172 1.2 1.2 0 00-.357-.844z"
        fill="#072040"
      />
    </Svg>
  );
}

export default SvgComponent;
