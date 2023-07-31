import { SVGProps } from "react"

export type TSVG = {
  svgProps?: SVGProps<SVGSVGElement>
  color?: string
}

export type WithChildrenProps = {
  children?: React.ReactNode
}
