import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={23}
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.912 22.973c-.368 0-.723-.133-1-.375-1.043-.912-2.049-1.769-2.936-2.525a54.612 54.612 0 01-6.41-6.017A9.611 9.611 0 010 7.76 8.071 8.071 0 012.05 2.248 6.944 6.944 0 017.215 0a6.5 6.5 0 014.057 1.4 8.303 8.303 0 011.64 1.713 8.297 8.297 0 011.64-1.713A6.5 6.5 0 0118.61 0a6.944 6.944 0 015.165 2.248 8.071 8.071 0 012.048 5.512 9.61 9.61 0 01-2.56 6.291 54.606 54.606 0 01-6.41 6.017c-.89.757-1.9 1.616-2.943 2.53-.276.242-.63.375-.998.375zM7.215 1.513a5.448 5.448 0 00-4.054 1.76A6.565 6.565 0 001.513 7.76a8.087 8.087 0 002.213 5.326c1.918 2.106 4 4.056 6.227 5.831.891.76 1.9 1.62 2.951 2.538a331.533 331.533 0 012.961-2.543 53.757 53.757 0 006.236-5.826 8.087 8.087 0 002.21-5.326 6.565 6.565 0 00-1.649-4.487 5.447 5.447 0 00-4.053-1.76A5.017 5.017 0 0015.48 2.6a7.339 7.339 0 00-1.746 2.02.954.954 0 01-1.64 0 7.333 7.333 0 00-1.747-2.02 5.016 5.016 0 00-3.13-1.087z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
