import React from "react";

export default function ProfileImg() {
  return (
    <div>
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_1_5359)">
          <rect
            x="0.595703"
            width="59.8039"
            height="61"
            rx="7"
            fill="#F05B5B"
          />
        </g>
        <mask
          id="mask0_1_5359"
          style={{maskType: "alpha"}}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="61"
          height="61"
        >
          <rect
            x="0.595703"
            width="59.8039"
            height="61"
            rx="7"
            fill="#8622D6"
            fill-opacity="0.85"
          />
        </mask>
        <g mask="url(#mask0_1_5359)">
          <ellipse
            cx="37.4426"
            cy="47.6317"
            rx="41.0911"
            ry="41.9129"
            fill="#39B8FF"
          />
        </g>
        <rect
          x="31.8477"
          y="30.5"
          width="3.08665"
          height="6.1"
          rx="1.54333"
          fill="black"
        />
        <rect
          x="42.0791"
          y="30.5"
          width="3.08665"
          height="6.1"
          rx="1.54333"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.7022 39.4271C24.4933 39.1034 25.3918 39.4952 25.7092 40.3021C26.3457 41.9204 29.0208 45.512 34.3816 45.4471C35.2339 45.4367 35.9331 46.1331 35.9432 47.0025C35.9533 47.8718 35.2706 48.5849 34.4183 48.5952C27.4999 48.6791 23.8404 44.0066 22.8444 41.4743C22.5271 40.6674 22.9111 39.7508 23.7022 39.4271Z"
          fill="black"
        />
        <defs>
          <filter
            id="filter0_b_1_5359"
            x="-13.6043"
            y="-14.2"
            width="88.2037"
            height="89.4"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.1" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_5359"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_5359"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
