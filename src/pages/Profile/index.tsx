import Layout from "@/components/Layout"
import { Content } from "@/components/Layout/Content"
import { OverviewProfile } from "./OverviewProfile"
import { BodyRecord } from "./BodyRecord"
import { MyExercise } from "./MyExercise"
import { MyDiary } from "./MyDiary"

export const Profile = () => {
  const handleClickCategory = (key: string) => {
    const element = document.getElementById(key)

    element?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <Layout>
      <Content>
        <OverviewProfile onClickCategory={handleClickCategory} />
        <div className="my-14">
          <BodyRecord />
        </div>
        <div className="my-14">
          <MyExercise />
        </div>
        <div className="my-14">
          <MyDiary />
        </div>

        <div className="mb-16 h-14 bg-gradient-yellow w-72 m-auto rounded cursor-pointer">
          <div className="flex justify-center items-center h-full text-lg font-notoJP font-light text-white">
            自分の日記をもっと見る
          </div>
        </div>
      </Content>
    </Layout>
  )
}
