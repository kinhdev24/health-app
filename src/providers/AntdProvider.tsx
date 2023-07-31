import { themeAntdConfig } from "@/config"
import { WithChildrenProps } from "@/types/common"
import { ConfigProvider } from "antd"

export const AntdConfigProvider = ({ children }: WithChildrenProps) => {
  return <ConfigProvider theme={themeAntdConfig}>{children}</ConfigProvider>
}
