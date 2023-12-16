import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={73}
      height={72}
      viewBox="0 0 73 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37 0h-1C16.118 0 0 16.118 0 36s16.118 36 36 36h1c19.882 0 36-16.118 36-36S56.882 0 37 0z"
        fill="#000"
      />
      <Path
        d="M63 28.25L26.42 43.825c-3.033 1.283-5.58 1.927-7.64 1.927-2.334 0-4.028-.817-5.078-2.452-.66-1.05-.854-2.381-.583-3.996.27-1.614.991-3.333 2.158-5.162.973-1.48 2.567-3.423 4.786-5.834a12.755 12.755 0 00-1.634 3.85c-.583 2.49-.058 4.317 1.575 5.484.777.543 1.846.816 3.208.816 1.088 0 2.313-.175 3.675-.525L63 28.25z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
