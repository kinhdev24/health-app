import { colors } from "@/themes"
import { TSVG } from "@/types/common"
import React from "react"

export const MemoIcon: React.FC<TSVG> = ({
  svgProps,
  color = colors["light-orange"],
}) => {
  return (
    <svg
      {...svgProps}
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="&#227;&#130;&#176;&#227;&#131;&#171;&#227;&#131;&#188;&#227;&#131;&#151; 139">
        <path
          id="&#227;&#131;&#145;&#227;&#130;&#185; 43"
          d="M26.549 7.66507L25.5568 6.67398C24.9561 6.07205 23.9811 6.07327 23.3792 6.67398L22.4519 7.60245L25.6207 10.7712L26.5489 9.84378C27.1498 9.24197 27.1498 8.267 26.5489 7.66507H26.549Z"
          fill={color}
        />
        <path
          id="&#227;&#131;&#145;&#227;&#130;&#185; 44"
          d="M13.76 16.2868V19.4561H16.9294L24.7571 11.6284L21.5879 8.45898L13.76 16.2868Z"
          fill={color}
        />
        <rect
          id="&#233;&#149;&#183;&#230;&#150;&#185;&#229;&#189;&#162; 12"
          x="6.34717"
          y="6.93436"
          width="8.9516"
          height="1.49193"
          fill={color}
        />
        <rect
          id="&#233;&#149;&#183;&#230;&#150;&#185;&#229;&#189;&#162; 13"
          x="6.34717"
          y="12.3984"
          width="8.9516"
          height="1.49193"
          fill={color}
        />
        <rect
          id="&#233;&#149;&#183;&#230;&#150;&#185;&#229;&#189;&#162; 14"
          x="6.36621"
          y="17.8626"
          width="5.47042"
          height="1.49193"
          fill={color}
        />
        <path
          id="&#227;&#131;&#145;&#227;&#130;&#185; 45"
          d="M19.5858 23.5985C19.5858 23.826 19.4027 24.0117 19.1775 24.0129H2.36658C2.14148 24.0117 1.9596 23.826 1.95838 23.5985V2.40259C1.9596 2.17407 2.14149 1.98828 2.36658 1.98718H19.1775C19.4027 1.98828 19.5858 2.17407 19.5858 2.40259V8.38971L21.5441 6.40253V2.40259C21.543 1.07593 20.4861 0.0011 19.1775 0H2.36658C1.05933 0.0011 0.00147 1.07593 0 2.40259V23.5985C0.00146 24.9252 1.05933 25.9989 2.36658 26H19.1775C20.4861 25.9989 21.543 25.7748 21.5441 24.4482V16.9488L19.5858 18.9359V23.5985Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
