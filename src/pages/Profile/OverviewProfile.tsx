import { recommendedProfile } from "@/data"

type OverviewProfileProps = {
  onClickCategory: (key: string) => void
}
export const OverviewProfile = ({ onClickCategory }: OverviewProfileProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {recommendedProfile.map((dataItem) => (
        <div className="bg-primary-yellow" key={dataItem.key}>
          <div className="relative pt-[100%] overflow-hidden">
            <div className="absolute inset-0 bg-black/90 mix-blend-luminosity m-6" />
            <img
              src={dataItem.thumbnail}
              className="absolute inset-0 p-6 opacity-25 mix-blend-luminosity w-full h-full object-cover overflow-hidden"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="text-primary-yellow text-[25px] tracking-[0.125px] uppercase">
                  {dataItem.title}
                </div>
                <div
                  className="m-auto py-1 px-6 bg-light-orange text-white mt-3 font-notoJP font-light cursor-pointer"
                  onClick={() => onClickCategory(dataItem.key)}
                >
                  {dataItem.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
