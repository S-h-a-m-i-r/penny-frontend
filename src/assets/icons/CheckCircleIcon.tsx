import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <g clipPath="url(#clip0_2010_10924)">
      <path
        fill="#85BB65"
        d="M16 2.661c7.364 0 13.334 5.97 13.334 13.334S23.364 29.328 16 29.328 2.667 23.358 2.667 15.995C2.667 8.63 8.637 2.66 16 2.66m4.714 8.508-6.6 6.6-2.827-2.828a1.335 1.335 0 0 0-2.277.942c0 .354.14.693.39.944l3.678 3.677a1.465 1.465 0 0 0 2.074 0l7.448-7.448a1.334 1.334 0 1 0-1.886-1.887"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_2010_10924">
        <path fill="#fff" d="M0-.006h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
