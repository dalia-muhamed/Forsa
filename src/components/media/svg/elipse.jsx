import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={375}
      height={130}
      viewBox="0 0 375 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M174 130c262.335 0 475-87.528 475-195.5S436.335-261 174-261c-262.335 0-475 87.528-475 195.5S-88.335 130 174 130z"
        fill="#072040"
      />
    </Svg>
  );
}

export default SvgComponent;
