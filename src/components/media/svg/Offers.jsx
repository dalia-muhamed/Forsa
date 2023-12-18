import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.295 5.534a2.262 2.262 0 012.261-2.262h1.029c.597 0 1.17-.237 1.593-.657l.719-.72a2.262 2.262 0 013.2-.009l.009.008.72.72c.423.42.996.657 1.593.657h1.031a2.262 2.262 0 012.262 2.262v1.028c0 .597.236 1.17.657 1.594l.72.72a2.26 2.26 0 01.01 3.2l-.009.009-.72.72c-.42.423-.657.995-.657 1.592v1.032a2.26 2.26 0 01-2.263 2.258h-1.033c-.597 0-1.17.237-1.593.658l-.72.719a2.262 2.262 0 01-3.2.012l-.009-.009-.719-.719a2.263 2.263 0 00-1.593-.658H5.556a2.26 2.26 0 01-2.261-2.261v-1.034c0-.597-.237-1.17-.658-1.592l-.719-.72a2.26 2.26 0 01-.011-3.2l.009-.009.719-.72a2.26 2.26 0 00.658-1.594V5.534"
        stroke={props.fill}
        strokeWidth={1.25}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.932 13.05l5.14-5.14"
        stroke="#C9C9C9"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
