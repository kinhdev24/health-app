import { newsData } from "@/data"
import { useState } from "react"

export const News = () => {
  const [news, setNews] = useState(newsData)
  const handleShowMore = () => {
    setNews((prevNews) => [...prevNews, ...newsData])
  }

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-6 gap-y-[18px]">
        {news.map((dataItem) => (
          <div key={dataItem.key} className="flex flex-col cursor-pointer">
            <div className="w-full relative">
              <img src={dataItem.thumbnail} className="object-cover w-full" />
              <div className="h-6 gap-3 bg-primary-yellow absolute bottom-0 px-2 flex justify-between text-white text-base">
                <div>2021.05.17</div>
                <div>23:25</div>
              </div>
            </div>

            <div className="mt-2 tracking-[0.075px] font-notoJP font-light text-[15px]">
              {dataItem.title}
            </div>
            <div className="tracking-[0.06px] text-light-orange font-notoJP font-light text-[12px]">
              {dataItem.tags.join(" ")}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mb-16 h-14 bg-gradient-yellow w-72 m-auto rounded cursor-pointer"
        onClick={handleShowMore}
      >
        <div className="flex justify-center items-center h-full text-lg font-notoJP font-light text-white">
          コラムをもっと見る
        </div>
      </div>
    </>
  )
}
