import Layout from "@/components/Layout"
import { Overview } from "./Overview"
import Categories from "./Categories"

const Dashboard = () => {
  return (
    <Layout>
      <Overview />
      <Categories />
    </Layout>
  )
}

export default Dashboard
