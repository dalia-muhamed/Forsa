import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.273 0h-8.2a.633.633 0 00-.447.185L.68 10.134a2.328 2.328 0 000 3.288l7.5 7.5a2.31 2.31 0 001.644.679 2.31 2.31 0 001.644-.679l9.949-9.949a.633.633 0 00.185-.447v-8.2A2.328 2.328 0 0019.272 0zm1.059 10.259l-9.764 9.764a1.064 1.064 0 01-1.5 0l-7.5-7.5a1.061 1.061 0 010-1.5l9.764-9.764h7.935a1.06 1.06 0 011.06 1.059l.005 7.941z"
        fill={props.fill}
      />
      <Path
        d="M16.02 3.589a1.988 1.988 0 10.002 3.976 1.988 1.988 0 00-.001-3.976zm.512 2.5a.722.722 0 11-1.02-1.022.722.722 0 011.02 1.022z"
        fill="#C9C9C9"
      />
    </Svg>
  );
}

export default SvgComponent;
