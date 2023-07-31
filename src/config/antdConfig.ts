import { colors } from "@/themes"
import { ThemeConfig } from "antd"
import { AliasToken } from "antd/es/theme/internal"

const tokenConfig: Partial<AliasToken> = {
  fontFamily: "inherit",
}

//Please follow docs https://ant.design/docs/react/customize-theme
export const themeAntdConfig: ThemeConfig = {
  token: tokenConfig,
  components: {
    //customize component here
    Dropdown: {
      colorBgElevated: colors["primary-gray"],
      colorText: colors.white,
      controlHeight: 72,
    },
  },
}
