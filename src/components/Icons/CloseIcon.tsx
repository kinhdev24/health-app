import { colors } from "@/themes"
import { TSVG } from "@/types/common"
import React from "react"

export const CloseIcon: React.FC<TSVG> = ({
  svgProps,
  color = colors["light-orange"],
}) => {
  return (
    <svg
      {...svgProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon_close">
        <rect
          id="&#233;&#149;&#183;&#230;&#150;&#185;&#229;&#189;&#162; 49"
          opacity="0.01"
          width="32"
          height="32"
          fill={color}
        />
        <path
          id="&#231;&#183;&#154; 4"
          d="M7 7L26 26"
          stroke={color}
          strokeWidth="3"
        />
        <path
          id="&#231;&#183;&#154; 6"
          d="M7 26L26 7"
          stroke={color}
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}
