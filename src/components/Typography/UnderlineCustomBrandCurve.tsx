import React from "react";

interface UnderlineCustomBrandCurveProps {
  className?: string;
}

export const UnderlineCustomBrandCurve = (
  props: UnderlineCustomBrandCurveProps
) => {
  const { className } = props;

  return (
    <svg
      width="151"
      height="44"
      viewBox="0 0 151 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 41C55.2408 0.957932 88.1209 -3.16019 150 9.0986"
        stroke="url(#paint0_linear_89_295)"
        strokeWidth="6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_295"
          x1="-18"
          y1="29.5"
          x2="169"
          y2="30.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC940" />
          <stop offset="1" stopColor="#F4A261" />
        </linearGradient>
      </defs>
    </svg>
  );
};
