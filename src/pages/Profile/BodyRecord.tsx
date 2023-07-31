import { LineChart } from "@/components/Elements"
import { groupByDataChart } from "@/data"
import clsx from "clsx"
import { useState } from "react"

const groupByData = groupByDataChart.map((item) => item.value)

type TChart = (typeof groupByData)[number]

export const BodyRecord = () => {
  const [chartType, setChartType] = useState<TChart>("day")

  return (
    <div
      className="w-full py-4 px-6 bg-primary-black text-white"
      id="body_record"
    >
      <div className="flex gap-4 items-center">
        <div>
          BODY <br />
          RECORD
        </div>
        <div className="text-[22px]">2021.05.21</div>
      </div>
      <div className="p-3">
        <LineChart height={250} />
      </div>
      <TypeChartBar onChange={setChartType} typeCurrent={chartType} />
    </div>
  )
}

interface TypeBarProps {
  onChange: (type: TChart) => void
  typeCurrent: TChart
}
const TypeChartBar = ({ onChange, typeCurrent }: TypeBarProps) => (
  <div className="flex gap-4">
    {groupByDataChart.map((typeItem) => {
      const isActive = typeItem.value === typeCurrent
      return (
        <div
          className={clsx(
            isActive
              ? "bg-primary-yellow text-white"
              : "bg-white text-primary-yellow",
            "py-1 px-7 rounded-2xl cursor-pointer hover:bg-primary-yellow hover:text-white duration-150 font-notoJP"
          )}
          onClick={() => onChange(typeItem.value)}
          key={typeItem.value}
        >
          {typeItem.label}
        </div>
      )
    })}
  </div>
)
