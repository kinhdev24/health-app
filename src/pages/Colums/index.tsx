import Layout from "@/components/Layout"
import { Content } from "@/components/Layout/Content"
import Recommended from "./Recommended"
import { News } from "./News"

export const Columns = () => {
  return (
    <Layout>
      <Content>
        <div className="mb-14">
          <Recommended />
        </div>
        <News />
      </Content>
    </Layout>
  )
}
