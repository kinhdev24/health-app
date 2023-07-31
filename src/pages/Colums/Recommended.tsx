import { recommendedData } from "@/data"

const Recommended = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {recommendedData.map((dataItem) => (
        <div
          key={dataItem.key}
          className="bg-primary-black py-6 px-2 flex flex-col items-center gap-2 text-white"
        >
          <div className="text-primary-yellow text-[22px] text-center uppercase">
            {dataItem.primaryContent}
          </div>
          <div className="w-14 h-[1px] bg-white" />
          <div className="font-notoJP text-lg font-light">
            {dataItem.secondContent}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended
