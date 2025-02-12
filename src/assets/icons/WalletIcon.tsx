import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <g clipPath="url(#clip0_5092_1203)">
      <path
        fill="#85BB65"
        fillRule="evenodd"
        d="M19 5.483v1.01a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10c0-1.044.835-1.992 1.813-2.271l11-3.143A2.5 2.5 0 0 1 19 5.483m-3.5 6.51a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.5-6.51a.5.5 0 0 0-.558-.497l-.08.016-5.222 1.492H17z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_5092_1203">
        <path fill="#fff" d="M0 .494h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
