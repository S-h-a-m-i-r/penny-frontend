import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    fill="none"
    viewBox="0 0 48 48"
  >
    <rect
      width="47"
      height="47"
      x="0.5"
      y="0.5"
      stroke="#000F0A"
      rx="23.5"
    ></rect>
    <g clipPath="url(#clip0_264_8235)">
      <path
        fill="#000F0A"
        fillRule="evenodd"
        d="M27.707 23.293a1 1 0 0 1 0 1.414l-5.657 5.657a.999.999 0 0 1-1.719-.703 1 1 0 0 1 .305-.71l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.415z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_264_8235">
        <path fill="#fff" d="M12 12h24v24H12z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
