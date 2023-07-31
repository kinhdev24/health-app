import { WithChildrenProps } from "@/types/common"
import { AntdConfigProvider } from "./AntdProvider"

export const Providers = ({ children }: WithChildrenProps) => {
  return <AntdConfigProvider>{children}</AntdConfigProvider>
}
