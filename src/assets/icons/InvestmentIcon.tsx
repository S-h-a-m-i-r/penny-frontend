import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <g clipPath="url(#clip0_5092_1530)">
      <path
        fill="#85BB65"
        d="M17 6.494a1 1 0 1 0 0 2h1.586L14 13.08l-3.793-3.793a1 1 0 0 0-1.414 0l-6.5 6.5a1 1 0 1 0 1.414 1.414L9.5 11.408l3.793 3.793a1 1 0 0 0 1.414 0L20 9.908v1.586a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_5092_1530">
        <path fill="#fff" d="M0 .494h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
