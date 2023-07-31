import { LineChart } from "@/components/Elements"
import { Progress } from "antd"
export const Overview = () => {
  return (
    <div className="">
      <div className="w-full grid grid-cols-12">
        <div className="h-[360px] col-span-5 relative">
          <img
            src="/images/dashboard/main_photo.png"
            className="w-full h-full object-cover"
          />
          <Progress
            className="!absolute m-auto inset-0 flex justify-center items-center"
            type="circle"
            percent={75}
            style={{ marginRight: 8 }}
            size={181}
            strokeColor="white"
            strokeWidth={3}
            format={(percent) => (
              <div className="flex text-white justify-center items-end gap-1">
                <div className="text-lg">05/21</div>
                <div className="text-2xl">{percent}%</div>
              </div>
            )}
          />
        </div>
        <div className="col-span-7 bg-primary-black text-white px-14">
          <LineChart />
        </div>
      </div>
    </div>
  )
}
