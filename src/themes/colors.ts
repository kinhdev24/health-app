import colorsTailwind from "tailwindcss/colors"
import { DefaultColors } from "tailwindcss/types/generated/colors"

type TColorsConfig = {
  "primary-yellow": "#FFCC21"
  "light-orange": "#FF963C"
  "primary-orange": "#EA6C00"
  "light-blue": "#8FE9D0"
  "primary-black": "#2E2E2E"
  "primary-gray": "#777"
  "text-500": "#414141"
} & DefaultColors

export const colors: TColorsConfig = {
  ...colorsTailwind,
  "primary-yellow": "#FFCC21",
  "light-orange": "#FF963C",
  "primary-orange": "#EA6C00",
  "light-blue": "#8FE9D0",
  "primary-black": "#2E2E2E",
  "primary-gray": "#777",
  "text-500": "#414141",
}

export const backgroudImageConfig = {
  "gradient-yellow": "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%);",
}
